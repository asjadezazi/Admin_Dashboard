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

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/ITservices/createProject",
        {
          method: "POST",
          body: JSON.stringify({ title, description }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Success response", data);
        setSnackbarMessage("Teacher added successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTitle("");
        setDescription("");
      } else {
        console.error("Error response", response);
        setSnackbarMessage("Failed to add teacher. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error while adding the project:", error);
      alert("There was an error while adding the project.");
    }
  };

  const handleSnackProject = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Stack direction="row" spacing={2} mb={1}>
        <Link to="/add-project" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary">
            Add Project
          </Typography>
        </Link>
        <Link to="/project-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary">
            Project List
          </Typography>
        </Link>
      </Stack>
      <Box
        p={4}
        width="400px"
        border="2px solid rgba(0, 0, 0, 0.12)"
        borderRadius="8px"
      >
        <Stack spacing={2}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        onClose={handleSnackProject}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackProject}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddProject;
