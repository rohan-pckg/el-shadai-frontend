// pages/admin/newsletter.js

"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
import API_URL from "../config"; 

const NewsletterPage = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/newsletter`); // Update with your actual API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/newsletter/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete subscriber");
      }

      // Update the subscribers state to remove the deleted subscriber
      setSubscribers((prev) => prev.filter((subscriber) => subscriber._id !== id));
      setSnackbarMessage("Subscriber deleted successfully!");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      setSnackbarMessage("Error deleting subscriber.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
        Newsletter Subscribers
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#666", mb: 4 }}>
        Below is the list of subscribers to the newsletter.
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: "8px", boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Email Address</TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscribers.length > 0 ? (
              subscribers.map((subscriber) => (
                <TableRow key={subscriber._id}>
                  <TableCell>{subscriber.email}</TableCell>
                  <TableCell align="right">
                    <Button 
                      variant="outlined" 
                      color="error" 
                      onClick={() => handleDelete(subscriber._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">No subscribers found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Snackbar for feedback */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarMessage.includes("Error") ? "error" : "success"} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsletterPage;
