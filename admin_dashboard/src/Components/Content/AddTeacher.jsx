import {
  Stack,
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../Styles/Layout.css'

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const response = await fetch(
        "http://localhost:4000/api/coaching/createTeacher",
        {
          method: "POST",
          body: JSON.stringify({ name, designation, qualification }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success response:", data);
        setSnackbarMessage("Teacher added successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setName("");
        setDesignation("");
        setQualification("");
      } else {
        const errorData = await response.json();
        console.log("Error response:", errorData);
        setSnackbarMessage("Failed to add teacher. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.log("Error:", error);
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      className="add-teacher-container"
     
    >
      <Stack
        direction="row"
        spacing={2}
        mb={2}
        className="add-teacher-links"
        
      >
        <Link to="/add-teacher" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
            Add Teacher
          </Typography>
        </Link>
        <Link to="/teachers-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
            Teacher List
          </Typography>
        </Link>
      </Stack>
      <Box
        className= "add-teacher-box"
        >
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Designation"
            variant="outlined"
            fullWidth
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <TextField
            label="Qualification"
            variant="outlined"
            fullWidth
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
          <Button
            className="add-teacher-btn"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddTeacher;
