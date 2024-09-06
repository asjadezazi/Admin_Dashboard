import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import teacherICon from "../Icons/teacher.png";
import courseICon from "../Icons/course.png";
import projectIcon from '../Icons/clipboard.png'
import teamIcon from '../Icons/teamwork.png'
import { Typography, Box } from "@mui/material";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 220,
  height: 100,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
    background:"#982FDA",
        // "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: theme.palette.common.white,
}));

 

export default function SquareCorners() {
  return (
    <Stack direction="row" mt={4} ml={4} spacing={4}>
      <DemoPaper square={false}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <img
            src={teacherICon}
            alt=""
            width={40}
            height={40}
            style={{ marginBottom: "8px" }}
          />
          <Typography variant="h5">Teacher List</Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h5">30</Typography>
        </Box>
      </DemoPaper>

      <DemoPaper square={false}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <img
            src={courseICon}
            alt=""
            width={40}
            height={40}
            style={{ marginBottom: "8px" }}
          />
          <Typography variant="h5">
              Course List
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h5">30</Typography>
        </Box>
      </DemoPaper>
      <DemoPaper square={false}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <img
            src={projectIcon}
            alt=""
            width={40}
            height={40}
            style={{ marginBottom: "8px" }}
          />
          <Typography variant="h5">Project List</Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h5">30</Typography>
        </Box>
      </DemoPaper>
      <DemoPaper square={false}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <img
            src={teamIcon}
            alt=""
            width={40}
            height={40}
            style={{ marginBottom: "8px" }}
          />
          <Typography variant="h5">Team List</Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h5">30</Typography>
        </Box>
      </DemoPaper>
    </Stack>
  );
}
