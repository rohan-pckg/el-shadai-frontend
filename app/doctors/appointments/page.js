"use client"
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
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import API_URL from "../../admin/config";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import appointmentStyles from "./appointmentStyle.module.scss"
import componentStyles from "../../components/componentStyles.module.scss"

const AppointmentForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const doctorId = searchParams.get("doctorId");
  const doctorName = searchParams.get("doctorName");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!date || !time || !contactName || !contactPhone || !contactEmail) {
      setErrorMessage("All fields are required.");
      return;
    }

    const appointmentData = {
      doctorId: doctorId,
      doctorName: doctorName,  // Include doctorName here
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
        setOpenSuccessDialog(true);
      } else {
        const errorData = await response.json();
        const errorMessages = [];

        if (errorData.error && errorData.error.errors) {
          for (const [key, value] of Object.entries(errorData.error.errors)) {
            errorMessages.push(value.message);
          }
        }

        setErrorMessage(errorMessages.length > 0 ? errorMessages.join(", ") : "Failed to book appointment.");
      }
    } catch (error) {
      setErrorMessage("Error submitting the form.");
    }
  };

  const handleDialogClose = () => {
    setOpenSuccessDialog(false);
    router.push("/doctors");
  };

  if (!doctorId || !doctorName) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <div className={appointmentStyles.container_1}>
        <Navbar />

        <div className={appointmentStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Book Appointment with {doctorName}</p>
        </div>


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Paper
      
            sx={{
              padding: 6,
              border : "1px solid #1976d2",
              width: "100%",
              maxWidth: 500,
              borderRadius : "0px",
              backgroundColor: "#ffffff", // Make background transparent
              boxShadow: "none", // Remove box-shadow for a clean look
            }}
          > 
            {errorMessage && (
              <Typography variant="body2" color="error" align="center" sx={{ mb: 2, background: "#ffebee", padding: 1, borderRadius: 1 }}>
                {errorMessage}
              </Typography>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                fullWidth
                sx={{ mb: 3 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                fullWidth
                sx={{ mb: 3 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
                fullWidth
                sx={{
                  mb: 3, 
                }}
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
                sx={{
                  mb: 3,
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "0px",
                  display: "block", // Center button
                  margin: "0 auto", // Center button horizontally
                  backgroundColor: "#2645B3",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Book Appointment
              </Button>
            </form>
          </Paper>

          <Dialog
            open={openSuccessDialog}
            onClose={handleDialogClose}
            aria-labelledby="success-dialog-title"
            PaperProps={{
              sx: {
                borderRadius: "20px",
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
                sx={{ fontSize: "3rem", color: "#4caf50", mb: 2 }}
              />
              <DialogContentText sx={{ fontSize: "1.1rem", color: "#333" }}>
                Your appointment with <strong>{doctorName}</strong> has been successfully booked!
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
              <Button
                onClick={handleDialogClose}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  padding: "8px 20px",
                  borderRadius: "0px",
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

      </div>

      <Footer />
    </>
  );
};

export default AppointmentForm;

