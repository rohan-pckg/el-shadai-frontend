'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { Container, TextField, Button, Typography, Paper, CircularProgress, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to trigger redirect
  const [csrfToken, setCsrfToken] = useState(''); // State to hold CSRF token
  const router = useRouter();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch(`${API_URL}/api/csrf-token`, {
        credentials: 'include', // Include credentials to allow cookies to be sent
      });
      const data = await response.json();
      setCsrfToken(data.csrfToken); // Store the CSRF token
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken // Include CSRF token in headers
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });

      setLoading(false);

      if (res.ok) {
        const data = await res.json();
        console.log("Login successful:", data);
        setIsLoggedIn(true); // Set the login state to true to trigger redirect
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message || 'Invalid credentials');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred. Please try again.");
      setOpenSnackbar(true);
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/admin');
    }
  }, [isLoggedIn, router]); // Redirect when login is successful

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', marginTop: '20vh' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
