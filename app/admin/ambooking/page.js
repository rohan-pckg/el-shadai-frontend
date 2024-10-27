"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  // Fetch bookings and CSRF token
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/ambookings`, {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error("Failed to fetch bookings.");
        }
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setErrorMessage(err.message || "An error occurred while fetching bookings.");
      }
    };

    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${API_URL}/api/csrf-token`, {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error("Failed to fetch CSRF token.");
        }
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (err) {
        console.error("Error fetching CSRF token:", err);
        setErrorMessage("An error occurred while fetching CSRF token.");
      }
    };

    fetchBookings();
    fetchCsrfToken();
  }, []);

  // Update booking status
  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/api/ambookings/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ status }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error("Failed to update status.");
      }

      const updatedBooking = await response.json();
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id ? { ...booking, status: updatedBooking.status } : booking
        )
      );
      setSuccessMessage("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      setErrorMessage("An error occurred while updating status.");
    }
  };

  // Handle status toggle between "Pending" and "Dispatched"
  const handleSelectBooking = async (bookingId, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Dispatched" : "Pending";
    try {
      await updateStatus(bookingId, newStatus);
    } catch (err) {
      console.error("Error selecting booking:", err);
      setErrorMessage("An error occurred while selecting the booking.");
    }
  };

  // Delete booking
  const handleDeleteBooking = async (bookingId) => {
    try {
      const response = await fetch(`${API_URL}/api/ambookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": csrfToken,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking.");
      }

      setBookings((prev) =>
        prev.filter((booking) => booking._id !== bookingId)
      );
      setSuccessMessage("Booking deleted successfully!");
    } catch (err) {
      console.error("Error deleting booking:", err);
      setErrorMessage("An error occurred while deleting the booking.");
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
        Manage Ambulance Bookings
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking._id}>
                <TableCell>
                  <Checkbox
                    checked={booking.status === "Dispatched"}
                    onChange={() =>
                      handleSelectBooking(booking._id, booking.status)
                    }
                  />
                </TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.phone}</TableCell>
                <TableCell>{booking.address}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteBooking(booking._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}
      >
        <Alert onClose={() => setSuccessMessage("")} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")}
      >
        <Alert onClose={() => setErrorMessage("")} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ManageBookings;
