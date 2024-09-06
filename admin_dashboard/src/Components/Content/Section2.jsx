import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import TeacherList from "./TeacherList";
import AddTeacher from "./AddTeacher";
import AddCourse from "./AddCourse";
import CourseList from "./CourseList";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";
import TeamList from "./TeamList";
import AddTeam from "./AddTeam";
import DashBoard from "./DashBoard";
import Error from './Error'


const Section2 = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "black",
        height: "125vh",
        width: "100%",
        border: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Navbar />

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={< DashBoard/>} />
        <Route path="/teachers-list" element={<TeacherList />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/team-list" element={<TeamList />} />
        <Route path="/add-team" element={<AddTeam />} />
      </Routes>
    </Box>
  );
};

export default Section2;
