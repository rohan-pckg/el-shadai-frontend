// pages/admin/manage-bookings.js

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
import API_URL from "../config"; // Adjust the path according to your file structure

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/ambookings`);
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("An error occurred while fetching bookings.");
      }
    };

    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/ambookings/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Status updated:", data);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectBooking = async (bookingId, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Dispatched" : "Pending";

    try {
      const response = await fetch(
        `${API_URL}/api/ambookings/${bookingId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (response.ok) {
        const updatedBooking = await response.json();
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === updatedBooking._id ? updatedBooking : booking,
          ),
        );
        setSuccess(true);
      } else {
        throw new Error("Failed to update status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
      setError("An error occurred while updating status.");
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    try {
      await fetch(`${API_URL}/api/ambookings/${bookingId}`, {
        method: "DELETE",
      });
      setBookings((prev) =>
        prev.filter((booking) => booking._id !== bookingId),
      );
      setSuccess(true);
    } catch (err) {
      console.error("Error deleting booking:", err);
      setError("An error occurred while deleting the booking.");
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
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Action completed successfully!
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

export default ManageBookings;
