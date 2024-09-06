import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "#982FDA",
        height: {
          xs: "57px", // Height for phone sizes
          md: "68px", // Adjusted height for laptop sizes
        },
        flexBasis: "40%",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: "2em",
          fontWeight: "bold",
          marginLeft: { xs: "10px", sm: "15px", md: "40px" },
          marginTop: { xs: "20x", sm: "15px", md: "9px" },
          fontFamily: "Roboto",
          color: "white",
        }}
      >
        Ezazi
      </Typography>
    </Box>
  );
};

export default Sidebar;

