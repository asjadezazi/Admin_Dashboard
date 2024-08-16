import { Stack, TextField, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AddTeam = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={4}
        >
            <Stack direction="row" spacing={2} mb={1}>
                <Link to="/add-team" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" color="primary">Add Team</Typography>
                </Link>
                <Link to="/team-list" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" color="primary">Team List</Typography>
                </Link>
            </Stack>
            <Box
                p={4}
                width="400px"
                border="2px solid rgba(0, 0, 0, 0.12)"
                borderRadius="8px"
            >
                <Stack spacing={2}>
                    <TextField label="Name" variant="outlined" fullWidth />
                    <TextField label="Background" variant="outlined" fullWidth />
                    <TextField label="Designation" variant="outlined" fullWidth />
                    {/* <TextField label="Qualification" variant="outlined" fullWidth /> */}
                    <Button variant="contained" component="label">
                        Upload Photo
                        <input type="file" hidden />
                    </Button>
                    <Button variant="contained" color="secondary" fullWidth>
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Box >
    );
};

export default AddTeam;



