// manageDoctors.js

"use client";

import React, { useState, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [editId, setEditId] = useState(null); // To track which doctor is being edited
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });

  // Fetch all doctors
  const fetchDoctors = async () => {
    const response = await fetch(`${API_URL}/api/doctors`);
    const data = await response.json();
    setDoctors(data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Create or Update doctor
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `${API_URL}/api/doctors/${editId}`
      : `${API_URL}/api/doctors`;

    const doctorData = { name, speciality };

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorData),
    });

    if (response.ok) {
      fetchDoctors(); // Refresh the list after creating or updating
      setName("");
      setSpeciality("");
      setEditId(null); // Reset edit ID
      showNotification(
        editId ? "Doctor updated successfully!" : "Doctor added successfully!",
        "success",
      );
    } else {
      console.error("Failed to save doctor:", await response.text());
      showNotification("Failed to save doctor.", "error");
    }
  };

  // Delete doctor
  const handleDelete = async (id) => {
    const response = await fetch(`${API_URL}/api/doctors/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchDoctors(); // Refresh the list after deletion
      showNotification("Doctor deleted successfully!", "success");
    } else {
      console.error("Failed to delete doctor:", await response.text());
      showNotification("Failed to delete doctor.", "error");
    }
  };

  // Edit doctor
  const handleEdit = (doctor) => {
    setName(doctor.name);
    setSpeciality(doctor.speciality);
    setEditId(doctor._id);
  };

  // Show notification
  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  // Close notification
  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Manage Doctors
      </Typography>
      <Paper
        elevation={3}
        sx={{ padding: 3, marginBottom: 4, borderRadius: 2 }}
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" gap={2} mb={2}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Speciality"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              required
              fullWidth
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ height: "100%" }}
            >
              {editId ? "Update Doctor" : "Add Doctor"}
            </Button>
          </Box>
        </form>
      </Paper>
      <Paper elevation={2} sx={{ padding: 2, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Doctors List
        </Typography>
        <List>
          {doctors.map((doctor) => (
            <ListItem
              key={doctor._id}
              sx={{ mb: 1, bgcolor: "#f9f9f9", borderRadius: 1 }}
            >
              <ListItemText
                primary={doctor.name}
                secondary={doctor.speciality}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEdit(doctor)}
                >
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(doctor._id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ManageDoctors;
