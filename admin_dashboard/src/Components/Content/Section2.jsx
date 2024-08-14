import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import TeachersList from './TeacherList';
import AddTeacher from './AddTeacher';
import AddCourse from './AddCourse'

const Section2 = () => {
    return (
        <Box sx={{
            bgcolor: '#white', color: 'black', height: '125vh', width: '100 % ', border: '1px solid rgba(0, 0, 0, 0.12)'
        }}>
            < Navbar />

            <Routes>
                <Route path="/teachers-list" element={<TeachersList />} />
                <Route path="/add-teacher" element={<AddTeacher />} />
                <Route path="/add-course" element={<AddCourse />} />
            </Routes>
        </Box >
    );
};

export default Section2;

