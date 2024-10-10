// pages/admin/contacts.js
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
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import API_URL from "../config";

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]); // Initialize contacts as an array

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/contacts`);
      const result = await response.json(); // Use result instead of data
      console.log("Fetched Contacts:", result); // Log the fetched data

      // Set contacts state to the data array
      if (Array.isArray(result.data)) {
        setContacts(result.data);
      } else {
        console.error("Unexpected data format:", result);
        setContacts([]); // Reset to empty array on error
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]); // Reset to empty array on error
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/contacts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setContacts((prev) => prev.filter((contact) => contact._id !== id));
      } else {
        const data = await response.json();
        console.error("Failed to delete contact:", data.message); // Log error message from backend
      }
    } catch (error) {
      console.error("Error:", error); // Catch and log errors from the fetch request
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  console.log("Current Contacts State:", contacts); // Log current state before rendering

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
        Manage Contacts
      </Typography>

      <Grid container spacing={4}>
        {Array.isArray(contacts) ? (
          contacts.map((contact) => (
            <Grid item xs={12} sm={6} md={4} key={contact._id}>
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
                      Name: {contact.name}
                    </Typography>

                    {/* Delete Button */}
                    <IconButton
                      onClick={() => handleDelete(contact._id)}
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
                    <Tooltip title="Phone">
                      <PhoneIcon sx={{ mr: 1, color: "#009688" }} />
                    </Tooltip>
                    <Typography variant="body1" sx={{ color: "#757575" }}>
                      {contact.phone}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                    <Tooltip title="Email">
                      <EmailIcon sx={{ mr: 1, color: "#009688" }} />
                    </Tooltip>
                    <Typography variant="body1" sx={{ color: "#757575" }}>
                      {contact.email}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="error">
            No contacts available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ManageContacts;
