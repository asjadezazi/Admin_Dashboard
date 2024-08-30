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

const AddTeam = () => {
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const [designation, setDesignation] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  // const [photo, setPhoto] = useState("");

  const handleAddTeam = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/ITservices/createTeam",
        {
          method: "POST",
          body: JSON.stringify({ name, background, designation }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Succes response", data);
        // alert("Team added succesfully");
        setSnackbarMessage("Teacher added successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setName("");
        setBackground("");
        setDesignation("");
      } else {
        console.log("Error message", response);
        setSnackbarMessage("Failed to add teacher. Please try again.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.log("Error while adding the project :", error);
      alert("There was an error while adding the project");
    }
  };

  const handleSnackTeam = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Stack direction="row" spacing={2} mb={1}>
        <Link to="/add-team" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary">
            Add Team
          </Typography>
        </Link>
        <Link to="/team-list" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary">
            Team List
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
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Background"
            variant="outlined"
            fullWidth
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
          <TextField
            label="Designation"
            variant="outlined"
            fullWidth
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          {/* <Button variant="contained" component="label">
            Upload Photo
            <input type="file" hidden />
          </Button> */}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleAddTeam}
          >
            Submit
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackTeam}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackTeam}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddTeam;
