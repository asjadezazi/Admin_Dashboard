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
import "../Styles/Layout.css";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    // Check if there's a photo before appending
    if (photo) {
      formData.append("file", photo);
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/ITservices/createProject",
        {
          method: "POST",
          body: formData, // Use FormData to send multipart/form-data
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSnackbarMessage("Project added successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTitle("");
        setDescription("");
        setPhoto(null);
      } else {
        const errorData = await response.json();
        setSnackbarMessage("Failed to add project. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch{
      setSnackbarMessage("There was an error while adding the project.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSnackProject = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box className="add-project-container">
      <Stack direction="row" spacing={2} mb={2} className="add-project-links">
        <Link to="/add-project" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
            Add Project
          </Typography>
        </Link>
        <Link to="/project-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
            Project List
          </Typography>
        </Link>
      </Stack>
      <Box className="add-project-box">
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
          <Button variant="contained" component="label">
            Upload Photo
            <input
              type="file"
              name="file"
              hidden
              onChange={handleImageUpload}
            />
          </Button>
          <Button
            className="add-project-btn"
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
