// app/doctors/appointments/[doctorId].js
"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
import API_URL from "../../admin/config";

const AppointmentForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize the router
  const doctorName = searchParams.get("doctorName"); // Get doctorName from search parameters

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // State for the success dialog
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      doctorName, // Use the doctorName from the query
      date,
      time,
      contact: {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
      },
    };

    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        setOpenSuccessDialog(true); // Open success dialog on successful booking
      } else {
        const errorText = await response.text();
        console.error("Failed to book appointment:", errorText);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // Close the dialog and redirect back to the doctors page
  const handleDialogClose = () => {
    setOpenSuccessDialog(false);
    router.push("/doctors"); // Redirect after booking
  };

  // Ensure doctorName is defined before rendering the form
  if (!doctorName) {
    return <Typography>Loading...</Typography>; // Render loading state
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#e1eafc", // Subtle gradient background
        padding: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          borderRadius: 0,
          width: "100%",
          maxWidth: 400,
          background: "rgba(255, 255, 255, 0.8)", // Transparent background for modern feel
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Book Appointment with {doctorName}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Your Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Phone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: "10px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#1976d2", // Darker blue on hover
              },
            }}
          >
            Book Appointment
          </Button>
        </form>
      </Paper>

      {/* Modern Success Dialog */}
      <Dialog
        open={openSuccessDialog}
        onClose={handleDialogClose}
        aria-labelledby="success-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: "20px", // More rounded corners for modern design
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
            Appointment Booked
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
            Your appointment with <strong>{doctorName}</strong> has been
            successfully booked!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
          <Button
            onClick={handleDialogClose}
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "20px", // Rounded button for a modern look
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

export default AppointmentForm;
