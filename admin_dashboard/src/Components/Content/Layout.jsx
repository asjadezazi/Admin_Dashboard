import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Layout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{
      flexGrow: 1, minHeight: "100vh",
      border: "2px solid white"
    }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={isSmallScreen ? 4 : 2} // 4 out of 12 columns on small screens
          sx={{
            height: "100%",
          }}
        >
          <Section1 />
        </Grid>
        <Grid
          item
          xs={isSmallScreen ? 8 : 10} // 8 out of 12 columns on small screens
          sx={{
            height: "100%",
          }}
        >
          <Section2 />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
