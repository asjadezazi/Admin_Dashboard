// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import Tooltip from '@mui/material/Tooltip';
// // import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';

// // const pages = ['    Courses', 'About Us', 'ContacT Us'];
// // const settings = ['Logout'];

// // function ResponsiveAppBar() {
// //     const [anchorElNav, setAnchorElNav] = React.useState(null);
// //     const [anchorElUser, setAnchorElUser] = React.useState(null);

// //     const handleOpenNavMenu = (event) => {
// //         setAnchorElNav(event.currentTarget);
// //     };
// //     const handleOpenUserMenu = (event) => {
// //         setAnchorElUser(event.currentTarget);
// //     };

// //     const handleCloseNavMenu = () => {
// //         setAnchorElNav(null);
// //     };

// //     const handleCloseUserMenu = () => {
// //         setAnchorElUser(null);
// //     };
// //     return (
// //         <AppBar position="static" sx={{ color: 'white', backgroundColor: '#982FDA' }}>
// //             <Container maxWidth="mr">
// //                 <Toolbar disableGutters>
// //                     <AdbIcon sx={{
// //                         display: { xs: 'none', md: 'flex' },
// //                         mr: 1,
// //                         color: 'white',
// //                     }} />
// //                     <Typography
// //                         variant="h6"
// //                         noWrap
// //                         component="a"
// //                         href="#app-bar-with-responsive-menu"
// //                         sx={{
// //                             mr: 2,
// //                             display: { xs: 'none', md: 'flex' },
// //                             fontFamily: 'Roboto',
// //                             fontWeight: 700,
// //                             letterSpacing: '.3rem',
// //                             color: 'white',
// //                             textDecoration: 'none',
// //                         }}
// //                     >
// //                         Home
// //                     </Typography>

// //                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //                         <IconButton
// //                             size="large"
// //                             aria-label="account of current user"
// //                             aria-controls="menu-appbar"
// //                             aria-haspopup="true"
// //                             onClick={handleOpenNavMenu}
// //                             sx={{ color: 'black', padding: 0 }}
// //                         >
// //                             <MenuIcon />
// //                         </IconButton>
// //                         <Menu
// //                             id="menu-appbar"
// //                             anchorEl={anchorElNav}
// //                             anchorOrigin={{
// //                                 vertical: 'bottom',
// //                                 horizontal: 'left',
// //                             }}
// //                             keepMounted
// //                             transformOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'left',
// //                             }}
// //                             open={Boolean(anchorElNav)}
// //                             onClose={handleCloseNavMenu}
// //                             sx={{
// //                                 display: { xs: 'block', md: 'none' },
// //                             }}
// //                         >
// //                             {pages.map((page) => (
// //                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
// //                                     <Typography textAlign="center" sx={{ color: 'black' }}>{page}</Typography>
// //                                 </MenuItem>
// //                             ))}
// //                         </Menu>
// //                     </Box>
// //                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
// //                     <Typography
// //                         variant="h5"
// //                         noWrap
// //                         component="a"
// //                         href="#app-bar-with-responsive-menu"
// //                         sx={{
// //                             mr: 2,
// //                             display: { xs: 'flex', md: 'none' },
// //                             flexGrow: 1,
// //                             fontFamily: 'Roboto',
// //                             fontWeight: 700,
// //                             letterSpacing: '.3rem',
// //                             color: 'white',
// //                             textDecoration: 'none',
// //                         }}
// //                     >
// //                         Logo
// //                     </Typography>
// //                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
// //                         {pages.map((page) => (
// //                             <Button
// //                                 key={page}
// //                                 onClick={handleCloseNavMenu}
// //                                 sx={{ my: 2, color: 'white', display: 'block' }}
// //                             >
// //                                 {page}
// //                             </Button>
// //                         ))}
// //                     </Box>

// //                     <Box sx={{ flexGrow: 0 }}>
// //                         <Tooltip title="Open settings">
// //                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //                                 <Avatar alt="S" src="/static/images/avatar/1.jpg" />
// //                             </IconButton>
// //                         </Tooltip>
// //                         <Menu
// //                             sx={{ mt: '45px' }}
// //                             id="menu-appbar"
// //                             anchorEl={anchorElUser}
// //                             anchorOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'right',
// //                             }}
// //                             keepMounted
// //                             transformOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'right',
// //                             }}
// //                             open={Boolean(anchorElUser)}
// //                             onClose={handleCloseUserMenu}
// //                         >
// //                             {settings.map((setting) => (
// //                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// //                                     <Typography textAlign="center" sx={{ color: 'black' }}>{setting}</Typography>
// //                                 </MenuItem>
// //                             ))}
// //                         </Menu>
// //                     </Box>
// //                 </Toolbar>
// //             </Container>
// //         </AppBar>
// //     );
// // }
// // export default ResponsiveAppBar;


// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Courses", "About Us", "Contact Us"];
// const settings = ["Logout"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleLogout = () => {
//     // Logic to handle logout, e.g., clearing authentication tokens
//     console.log("User logged out");
//     navigate("/register"); // Redirect to the register page
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{ color: "white", backgroundColor: "#982FDA" }}
//     >
//       <Container maxWidth="mr">
//         <Toolbar disableGutters>
//           <AdbIcon
//             sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }}
//           />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "Roboto",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "white",
//               textDecoration: "none",
//             }}
//           >
//             Home
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               sx={{ color: "black", padding: 0 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center" sx={{ color: "black" }}>
//                     {page}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon
//             sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "black" }}
//           />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "Roboto",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "white",
//               textDecoration: "none",
//             }}
//           >
//             Logo
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="S" src="/static/images/avatar/1.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem
//                   key={setting}
//                   onClick={
//                     setting === "Logout" ? handleLogout : handleCloseUserMenu
//                   }
//                 >
//                   <Typography textAlign="center" sx={{ color: "black" }}>
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;

//  import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['    Courses', 'About Us', 'ContacT Us'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     return (
//         <AppBar position="static" sx={{ color: 'white', backgroundColor: '#982FDA' }}>
//             <Container maxWidth="mr">
//                 <Toolbar disableGutters>
//                     <AdbIcon sx={{
//                         display: { xs: 'none', md: 'flex' },
//                         mr: 1,
//                         color: 'white',
//                     }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="#app-bar-with-responsive-menu"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'Roboto',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'white',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         Home
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             sx={{ color: 'black', padding: 0 }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center" sx={{ color: 'white' }}>{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="a"
//                         href="#app-bar-with-responsive-menu"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'Roboto',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'white',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         Logo
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'white', display: 'block' }}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                     </Box>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="S" src="/static/images/avatar/1.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center" sx={{ color: 'black' }}>{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default ResponsiveAppBar;
























import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Courses', 'About Us', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        // Perform any logout actions here
        navigate('/login'); // Navigate to the login page or wherever is appropriate
        handleCloseUserMenu();
    };

    return (
        <AppBar position="static" sx={{ color: 'white', backgroundColor: '#982FDA' }}>
            <Container maxWidth="mr">
                <Toolbar disableGutters>
                    <AdbIcon sx={{
                        display: { xs: 'none', md: 'flex' },
                        mr: 1,
                        color: 'white',
                    }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: 'black', padding: 0 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{ color: 'white' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Logo
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="S" src="/static/images/avatar/1.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}
                                >
                                    <Typography textAlign="center" sx={{ color: 'black' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

