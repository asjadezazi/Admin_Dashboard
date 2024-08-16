import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import TeacherList from './TeacherList';
import AddTeacher from './AddTeacher';
import AddCourse from './AddCourse';
import CourseList from './CourseList'

const Section2 = () => {
    return (
        <Box sx={{
            bgcolor: '#white', color: 'black', height: '125vh', width: '100 % ', border: '1px solid rgba(0, 0, 0, 0.12)'
        }}>
            < Navbar />

            <Routes>
                <Route path="/teachers-list" element={<TeacherList />} />
                <Route path="/add-teacher" element={<AddTeacher />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/course-list" element={<CourseList />} />
            </Routes>
        </Box >
    );
};

export default Section2;




