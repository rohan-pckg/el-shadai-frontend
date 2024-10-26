"use client"
import { useState } from "react";
import { useRouter} from "next/navigation";
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
import API_URL from "../admin/config";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import appointmentStyles from "../doctors/appointments/appointmentStyle.module.scss"
import componentStyles from "../components/componentStyles.module.scss"

const ContactForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name || !phone || !email || !message) {
      setErrorMessage("All fields are required.");
      return;
    }


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
    router.push("/home"); // Redirect after success (change the path as needed)
  };

  return (
    <>
      <div className={appointmentStyles.container_1}>
        <Navbar />

        <div className={appointmentStyles.top}>
          <div className={componentStyles.blue_small_line}></div>
          <p>Contact Us! we will love you hear from You!</p>
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
              border: "1px solid #1976d2",
              width: "100%",
              maxWidth: 500,
              borderRadius: "0px",
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
           
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
           
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
                  margin: "auto",
                  marginTop: "30px", // Center button horizontally
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
                Contact added
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
                Your Contact has been successfully added! we will reach you shortly!
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

export default ContactForm;

