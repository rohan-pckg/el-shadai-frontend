"use client";
import { useState, useEffect } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import appointmentStyles from "../doctors/appointments/appointmentStyle.module.scss";
import componentStyles from "../components/componentStyles.module.scss";

const AmbulanceBookingForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  // Fetch CSRF token on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${API_URL}/api/csrf-token`, {
          method: "GET",
          credentials: "include", // Include cookies for CSRF
        });
        if (!response.ok) {
          throw new Error("Failed to fetch CSRF token");
        }
        const data = await response.json();
        setCsrfToken(data.csrfToken); // Set CSRF token
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name || !phone || !address) {
      setErrorMessage("All fields are required.");
      return;
    }

    const booking = { name, phone, address };

    try {
      const response = await fetch(`${API_URL}/api/ambookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken, // Send CSRF token in headers
        },
        credentials: "include", // Include cookies for CSRF
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        setOpenSuccessDialog(true);
        setName("");
        setPhone("");
        setAddress("");
      } else {
        const errorData = await response.json();
        const errorMessages = errorData.error?.errors
          ? Object.values(errorData.error.errors).map((e) => e.message)
          : ["Failed to book appointment."];

        setErrorMessage(errorMessages.join(", "));
      }
    } catch (error) {
      setErrorMessage("Error submitting the form.");
      console.error("Error submitting form:", error);
    }
  };

  const handleDialogClose = () => {
    setOpenSuccessDialog(false);
    router.push("/home");
  };

  return (
    <>
      <div className={appointmentStyles.container_1}>
        <Navbar />
        <div className={appointmentStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Book an Ambulance!</p>
        </div>

        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <Paper
            sx={{
              padding: 6,
              border: "1px solid #1976d2",
              width: "100%",
              maxWidth: 500,
              borderRadius: "0px",
              backgroundColor: "#ffffff",
              boxShadow: "none",
            }}
          >
            {errorMessage && (
              <Typography
                variant="body2"
                color="error"
                align="center"
                sx={{ mb: 2, background: "#ffebee", padding: 1, borderRadius: 1 }}
              >
                {errorMessage}
              </Typography>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                type="text"
                value={name}
                required
                fullWidth
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 3 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Phone"
                type="tel"
                value={phone}
                required
                fullWidth
                onChange={(e) => setPhone(e.target.value)}
                sx={{ mb: 3 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                fullWidth
                sx={{ mb: 3 }}
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
                  display: "block",
                  margin: "auto",
                  marginTop: "30px",
                  backgroundColor: "#2645B3",
                  "&:hover": { backgroundColor: "#1976d2" },
                }}
              >
                Book Ambulance
              </Button>
            </form>
          </Paper>

          <Dialog
            open={openSuccessDialog}
            onClose={handleDialogClose}
            aria-labelledby="success-dialog-title"
            PaperProps={{
              sx: { borderRadius: "20px", padding: "20px" },
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
                Ambulance Booked
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
                Your Ambulance is booked! and will be arriving shortly on{" "}
                <strong>{address}</strong>!
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
                  "&:hover": { backgroundColor: "#1565c0" },
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

export default AmbulanceBookingForm;
