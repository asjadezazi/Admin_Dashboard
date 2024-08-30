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

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = async () => {
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

        // Clear the input fields after successful submission
        setName("");
        setDesignation("");
        setQualification("");
      } else {
        console.log("Error response");
        setSnackbarMessage("Failed to add teacher. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch {
      console.log("error");
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <Stack
        direction="row"
        spacing={2}
        mb={2}
        sx={{
          width: "100%",
          justifyContent: "flex-start", // Aligns items starting from the left
          paddingLeft: "20px", // Shifts the links to the right
        }}
      >
        <Link to="/add-teacher" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            Add Teacher
          </Typography>
        </Link>
        <Link to="/teachers-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            Teacher List
          </Typography>
        </Link>
      </Stack>
      <Box
        p={{ xs: 2, sm: 3 }}
        width={{ xs: "100%", sm: "350px" }}
        border="2px solid rgba(0, 0, 0, 0.12)"
        borderRadius="8px"
        sx={{
          maxWidth: "100%", 
        }}
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
