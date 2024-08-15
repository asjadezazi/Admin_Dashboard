import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Section1 from './Section1';
import Section2 from './Section2';

const Layout = () => {
    return (
        <Box sx={{ flexGrow: 1, height: '150vh', border: '2px solid black' }}>
            <Grid container sx={{ height: '100%' }}>
                <Grid item sx={{ width: '20%', height: '100%' }}>
                    <Section1 />
                </Grid>
                <Grid item sx={{ width: '80%', height: '100%' }}>
                    <Section2 />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;

