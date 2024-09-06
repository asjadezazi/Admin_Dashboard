import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

export default function Layout() {
  const handleLinkClick = (e) => {
    console.log("Link clicked:", e.target.textContent);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#1976d2",
    fontWeight: "500",
    "&:hover": {
      color: "#1565c0",
    },
  };

  const dashboardLinkStyle = {
    textDecoration: "none",
    marginLeft: "15px",
    
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 2 }, mt: { xs: 1, sm: 2 } }}>
      <Accordion sx={{ mb: { xs: 1, sm: 2 }, "&:hover": { boxShadow: 10 } }}>
        <Typography variant="h6">
          
            <Link to="/" onClick={handleLinkClick} style={dashboardLinkStyle}>
              DashBoard
            </Link>
        </Typography>
      </Accordion>

      <Accordion sx={{ mb: { xs: 1, sm: 2 }, "&:hover": { boxShadow: 10 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">Coaching</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/add-teacher" onClick={handleLinkClick} style={linkStyle}>
              Add Teacher
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/teachers-list"
              onClick={handleLinkClick}
              style={linkStyle}
            >
              Teacher List
            </Link>
          </Typography>
          <Typography>
            <Link to="/add-course" onClick={handleLinkClick} style={linkStyle}>
              Add Course
            </Link>
          </Typography>
          <Typography>
            <Link to="/course-list" onClick={handleLinkClick} style={linkStyle}>
              Course List
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: { xs: 1, sm: 2 }, "&:hover": { boxShadow: 6 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6">IT Sector</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/add-project" onClick={handleLinkClick} style={linkStyle}>
              Add Project
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/project-list"
              onClick={handleLinkClick}
              style={linkStyle}
            >
              Project List
            </Link>
          </Typography>
          <Typography>
            <Link to="/add-team" onClick={handleLinkClick} style={linkStyle}>
              Add Team
            </Link>
          </Typography>
          <Typography>
            <Link to="/team-list" onClick={handleLinkClick} style={linkStyle}>
              Team List
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: { xs: 1, sm: 2 }, "&:hover": { boxShadow: 6 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6">Social App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Social App</Typography>
          <Typography>Service</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
