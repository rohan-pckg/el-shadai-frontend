"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Close icon for a modern feel
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // Success icon for visual feedback
import API_URL from "../admin/config";

const ContactForm = () => {
  const router = useRouter(); // Initialize the router
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
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false); // State for success dialog

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

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
        setOpenSuccessDialog(true); // Open success dialog
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

  const handleDialogClose = () => {
    setOpenSuccessDialog(false);
    router.push("/contacts"); // Redirect after success (change the path as needed)
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#e1eafc", // Subtle gradient background
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 400,
          background: "rgba(255, 255, 255, 0.8)", // Transparent background for modern feel
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Add New Contact
        </Typography>

        {error && (
          <Box
            sx={{
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              color: "#d32f2f",
              padding: 1,
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            {error}
          </Box>
        )}

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

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={handleGoBack}
            >
              Go Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Modern Success Dialog */}
      <Dialog
        open={openSuccessDialog}
        onClose={handleDialogClose}
        aria-labelledby="success-dialog-title"
        PaperProps={{
          sx: {
            padding: "20px",
          },
        }}
      >
        <DialogTitle
          id="success-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 0,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact Added
          </Typography>
          <IconButton edge="end" onClick={handleDialogClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", paddingTop: 2 }}>
          <CheckCircleOutlineIcon
            sx={{ fontSize: "3rem", color: "#4caf50", mb: 2 }} // Success icon
          />
          <DialogContentText sx={{ fontSize: "1.1rem", color: "#333" }}>
            Your contact has been successfully added!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
          <Button
            onClick={handleDialogClose}
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: "8px 20px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;
