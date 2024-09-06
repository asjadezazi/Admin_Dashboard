import { Link } from "react-router-dom";
import { Button, Container, Typography, } from "@mui/material";

const Error = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h5" component="h5" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ mt: 2 }}
        color="primary"
      >
        Go Back to Home
      </Button>
    </Container>
  );
};

export default Error;
