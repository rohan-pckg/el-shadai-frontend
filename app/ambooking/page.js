// pages/admin/ambbooking-form.js

"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import API_URL from "../admin/config"; // Adjust this import according to your file structure

const AmbulanceBookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the booking object
    const booking = {
      name,
      phone,
      address,
    };

    try {
      const response = await fetch(`${API_URL}/api/ambookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
        setAddress("");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to create booking.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while creating the booking.");
    }
  };

  return (
    <Box sx={{ mt: 6, px: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          color: "#212121",
        }}
      >
        Create Ambulance Booking
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          inputProps={{
            pattern: "^\\d{10}$", // Regex for 10-digit phone number
            title: "Please enter a valid phone number (10 digits)",
          }}
        />

        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit Booking
        </Button>
      </form>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Booking created successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <Alert onClose={() => setError("")} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AmbulanceBookingForm;
