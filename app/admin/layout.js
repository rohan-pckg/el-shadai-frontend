// pages/admin/layout.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const validCredentials = {
    username: "adminUser", // Replace with a secure username
    password: "mySecurePassword", // Replace with a secure password
  };

  useEffect(() => {
    const auth = sessionStorage.getItem("isAuthenticated") === "true";
    if (!auth) {
      setShowLogin(true); // Show the login form if not authenticated
    } else {
      setIsAuthenticated(true); // User is authenticated
    }
  }, [router]);

  const handleLogin = () => {
    if (username === validCredentials.username && password === validCredentials.password) {
      sessionStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      setShowLogin(false); // Hide login form after successful login
    } else {
      alert("Incorrect username or password");
    }
  };

  if (showLogin) {
    return (
      <Container component="main" maxWidth="xs" sx={{ marginTop: "20vh" }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Admin Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </Paper>
      </Container>
    );
  }

  return <>{children}</>; // Render children if authenticated
};

export default AdminLayout;
