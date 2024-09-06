import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import SectorDropdown from "./SectorDropdown";

const Section1 = () => {
  return (
    <Box
      sx={{
        bgcolor: "",
        color: "white",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        height: "155vh",
        width: "100% ",
      }}
    >
      <Sidebar />
      <SectorDropdown />
    </Box>
  );
};

export default Section1;
