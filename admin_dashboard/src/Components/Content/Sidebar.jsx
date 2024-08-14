import { Typography, Box } from '@mui/material';

const Sidebar = () => {
    return (
        < div>
            <Box sx={{ padding: 2, backgroundColor: '#982FDA', height: '100%' }}>
                < Typography variant="h1" component="h1" sx={{ fontSize: '1.9rem', fontWeight: 'bold', fontFamily: 'Roboto', color: 'white' }
                }>
                    Ezazi
                </Typography >
            </Box >
        </div >
    );
}

export default Sidebar;
