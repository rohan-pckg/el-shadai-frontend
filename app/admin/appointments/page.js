// pages/admin/appointments.js
"use client";
import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import API_URL from "../config";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const response = await fetch(`${API_URL}/api/appointments`);
    const data = await response.json();
    setAppointments(data);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/appointments/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAppointments((prev) =>
          prev.filter((appointment) => appointment._id !== id),
        );
      } else {
        const data = await response.json();
        console.error("Failed to delete appointment:", data.message); // Log error message from backend
      }
    } catch (error) {
      console.error("Error:", error); // Catch and log errors from the fetch request
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

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
        Manage Appointments
      </Typography>

      <Grid container spacing={4}>
        {appointments.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} key={appointment._id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
                borderRadius: "16px",
                transition: "transform 0.3s ease",
                backgroundColor: "#ffffff",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: "#212121",
                    }}
                  >
                    Doctor: {appointment.doctorName}
                  </Typography>

                  {/* Delete Button */}
                  <IconButton
                    onClick={() => handleDelete(appointment._id)}
                    sx={{
                      color: "#f44336", // Red color for delete button
                      "&:hover": {
                        backgroundColor: "rgba(244, 67, 54, 0.1)", // Soft red hover
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>

                <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                  <Tooltip title="Date">
                    <CalendarTodayIcon sx={{ mr: 1, color: "#009688" }} />
                  </Tooltip>
                  <Typography variant="body1" sx={{ color: "#757575" }}>
                    {appointment.date}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                  <Tooltip title="Time">
                    <AccessTimeIcon sx={{ mr: 1, color: "#009688" }} />
                  </Tooltip>
                  <Typography variant="body1" sx={{ color: "#757575" }}>
                    {appointment.time}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ mt: 3, fontWeight: "bold", color: "#424242" }}
                >
                  Contact Information
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                  <Tooltip title="Name">
                    <PersonIcon sx={{ mr: 1, color: "#009688" }} />
                  </Tooltip>
                  <Typography variant="body1" sx={{ color: "#757575" }}>
                    {appointment.contact.name}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                  <Tooltip title="Phone">
                    <PhoneIcon sx={{ mr: 1, color: "#009688" }} />
                  </Tooltip>
                  <Typography variant="body1" sx={{ color: "#757575" }}>
                    {appointment.contact.phone}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                  <Tooltip title="Email">
                    <EmailIcon sx={{ mr: 1, color: "#009688" }} />
                  </Tooltip>
                  <Typography variant="body1" sx={{ color: "#757575" }}>
                    {appointment.contact.email}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageAppointments;
