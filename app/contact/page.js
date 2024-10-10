"use client";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import API_URL from "../admin/config";

// Improved phone validation to include digits and other basic checks
const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(String(phone));
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState(""); // Phone error state
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateFields = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number (10).");
      isValid = false;
    } else {
      setPhoneError(""); // Clear error if phone number is valid
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(""); // Clear error if email is valid
    }

    if (!message.trim()) {
      setMessageError("Message is required.");
      isValid = false;
    } else {
      setMessageError(""); // Clear error if message is valid
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    // Secure the contact object
    const contact = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      const response = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to add contact.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while adding the contact.");
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
        Add New Contact
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
          error={!!nameError}
          helperText={nameError}
        />

        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          error={!!phoneError} // Display error state for phone
          helperText={phoneError} // Show phone error message
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          error={!!emailError}
          helperText={emailError}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          rows={4}
          error={!!messageError}
          helperText={messageError}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Add Contact
        </Button>
      </form>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Contact added successfully!
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

export default ContactForm;
