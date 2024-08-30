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
        setSnackbarMessage("Course Added succesfully!!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setTitle("");
        setDescription("");
      } else {
        console.log("error message");
        setSnackbarMessage("failed to add course.please try again later");
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
      justifyContent="center"
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
        <Link to="/add-course" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            Add Course
          </Typography>
        </Link>
        <Link to="/course-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            Course List
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
            variant="contained"
            color="secondary"
            fullWidth
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
