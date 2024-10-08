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

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  const handleAddCourse = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/coaching/createCourse",
        {
          method: "Post",
          body: JSON.stringify({ title, description }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Succes response:", data);
        setSnackbarMessage("Course Added successfully!!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setTitle("");
        setDescription("");
      } else {
        console.log("error message");
        setSnackbarMessage("Failed to add course. Please try again later.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch {
      console.log("error");
    }
  };

  const handleSnackCloseCourse = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box className="add-course-container">
      <Stack direction="row" spacing={2} className="add-course-links">
        <Link to="/add-course" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight:500 }}>
            Add Course
          </Typography>
        </Link>
        <Link to="/course-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
            Course List
          </Typography>
        </Link>
      </Stack>
      <Box className="add-course-box">
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
            <input type="file" hidden />
          </Button> 
          <Button
            className="add-course-btn"
            variant="contained"
            color="secondary"
            onClick={handleAddCourse}
          >
            Submit
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackCloseCourse}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackCloseCourse}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddCourse;
