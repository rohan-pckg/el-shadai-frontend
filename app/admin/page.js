"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmailIcon from "@mui/icons-material/Email"; // Importing Email icon for newsletter

const AdminDashboard = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const cardStyles = {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        p: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 4, fontWeight: "bold", color: "#333" }}
        >
          Welcome to the Admin Dashboard
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#666", mb: 6 }}>
          Use the cards below to manage doctors, appointments, contacted users,
          and ambulance bookings.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardStyles}>
              <CardActionArea
                onClick={() => handleNavigation("/admin/contacts")}
              >
                <CardContent sx={{ textAlign: "center", py: 6 }}>
                  <ContactMailIcon
                    sx={{ fontSize: 60, color: "#1976d2", mb: 2 }}
                  />
                  <Typography variant="h5" fontWeight="bold">
                    Contacted Users
                  </Typography>
                  <Typography color="#777" mt={1}>
                    View and respond to user messages.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* New Ambulance Booking Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardStyles}>
              <CardActionArea
                onClick={() => handleNavigation("/admin/ambooking")}
              >
                <CardContent sx={{ textAlign: "center", py: 6 }}>
                  <DirectionsCarIcon
                    sx={{ fontSize: 60, color: "#1976d2", mb: 2 }}
                  />
                  <Typography variant="h5" fontWeight="bold">
                    Manage Ambulance Bookings
                  </Typography>
                  <Typography color="#777" mt={1}>
                    View, add, and manage ambulance bookings.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* New Newsletter Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardStyles}>
              <CardActionArea
                onClick={() => handleNavigation("/admin/newsletter")}
              >
                <CardContent sx={{ textAlign: "center", py: 6 }}>
                  <EmailIcon sx={{ fontSize: 60, color: "#1976d2", mb: 2 }} />
                  <Typography variant="h5" fontWeight="bold">
                    Newsletter Subscribers
                  </Typography>
                  <Typography color="#777" mt={1}>
                    View and manage newsletter subscriptions.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
