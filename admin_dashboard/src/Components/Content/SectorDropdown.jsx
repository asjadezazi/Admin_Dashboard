import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function Layout() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, image });
    };

    const handleLinkClick = (e) => {
        console.log('Link clicked:', e.target.textContent);
    };

    return (
        <Box sx={{ p: 2, mt: 2 }}>
            <Accordion sx={{ mb: 2, '&:hover': { boxShadow: 10 } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h6">Coaching</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography sx={{ mb: 1 }}>
                        <Link
                            to="/teachers-list"
                            onClick={handleLinkClick}
                            style={{
                                textDecoration: 'none',
                                color: '#1976d2',
                                '&:hover': { color: '#1565c0' }
                            }}
                        >
                            Teachers List
                        </Link>
                    </Typography> */}
                    <Typography sx={{ mb: 1 }}>
                        <Link
                            to="/add-teacher"
                            onClick={handleLinkClick}
                            style={{
                                textDecoration: 'none',
                                color: '#1976d2',
                                '&:hover': { color: '#1565c0' }
                            }}
                        >
                            Add Teacher
                        </Link>
                    </Typography>
                    <Typography>
                        <Link
                            to="/add-course"
                            onClick={handleLinkClick}
                            style={{
                                textDecoration: 'none',
                                color: '#1976d2',
                                '&:hover': { color: '#1565c0' }
                            }}
                        >
                            Add Course
                        </Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mb: 2, '&:hover': { boxShadow: 6 } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography variant="h6">IT Sector</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ mb: 1 }}>Project List</Typography>
                    <Typography>Add Project</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mb: 2, '&:hover': { boxShadow: 6 } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant="h6">Social App</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            p: 1.5,
                            bgcolor: '#f5f5f5',
                            borderRadius: 1,
                            boxShadow: 2,
                            '&:hover': { boxShadow: 4 }
                        }}
                    >
                        <TextField
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            required
                            multiline
                            rows={4}
                        />
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                                onChange={handleImageUpload}
                                accept="image/*"
                            />
                        </Button>
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>
                            Submit
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
