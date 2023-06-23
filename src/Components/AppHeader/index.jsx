import { AppBar, InputBase, Toolbar, Grid, Stack, Collapse, Button } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, useNavigate, Route, Routes } from "react-router-dom";
import logo from "../../icons/Sign-in/DNT Logo White-042x.png";
import { useMediaQuery } from '@mui/material';
import * as React from "react";
import {
  Box,
  Avatar,
  TextField,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  PersonAdd,
  Settings,
  Logout,
  Assignment,
  Face,
  ShoppingCartRounded,
  Notifications,
  Search,
} from "@mui/icons-material";
import { green, pink } from "@mui/material/colors";
import { appHeaderStyle } from "./style";
import LogoImage from "../../icons/Dashboard/DNT Logo White-04@2x.png"
import theme from "../ThemeProvider/index.jsx";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppHeaderCard } from "../CreateCard";
// Inline styled mui elements

const Logo = styled("img")({
  maxWidth: "300px",
  marginRight: "8px",
  marginLeft: "20px",
});

const Title = styled(Typography)({
  flexGrow: 1,
});

// const CusMenuItem = styled(MenuItem)({

// });

// Inline styled mui elements ending

function AppHeader() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = appHeaderStyle();

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  React.useEffect(() => {
    // Get the username from local storage if it exists
    const storedUsername = firstName + " " + lastName;
    if (firstName != null && lastName != null) {
      setLoggedIn(true);
      setUsername(storedUsername);
    }
  }, [firstName, lastName, loggedIn]);

  let navigate = useNavigate();

  function handleClickingLogout() {
    navigate("/login");
  }

  function handleClickingLogo() {
    navigate("/dashboard");
  }

  const [menuItemClicked, setMenuItemClicked] = React.useState(false);

  function handleClickingMenuIcon() {
    setMenuItemClicked((prev) => !prev);
  }

  const [clickedButton, setClickedButton] = React.useState('Products');

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    setLoggedIn(false);
    setUsername("");
    console.log("Logged out button clicked");
    console.log("firstName is " + localStorage.getItem("firstName"));
    console.log("lastName is " + localStorage.getItem("lastName"));
    handleClickingLogout();
  };

  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item xs={12} sm={6} className={classes.logoImageSection} style={{ justifyContent: 'start', }}>

            <Grid container justifyContent="flex-start" alignItems="center" >
              <Grid item >
                <Logo
                  src={LogoImage}
                  alt="Logo"
                  onClick={handleClickingLogo}
                  className={` ${isSmScreen ? classes.logoMobile : classes.logoImage}`}
                />
              </Grid>
              <Grid item xs={6} >
                <Typography variant='h4' sx={{
                  paddingLeft: '10px',
                }}
                  className={` ${isSmScreen ? classes.headerParaMobile : ''}`}
                >
                  PROPERTY MANAGEMENT SOLUTIONS
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={6} sm={6} style={{ display: isSmScreen ? 'none' : 'flex', }} >
            <Grid container sx={{ alignItems: 'center', cursor: 'pointer', justifyContent: 'end', }} onClick={handleClick}>

              <NotificationIcon variant="dot" />
              <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '25px', marginLeft: '20px', marginRight: '20px' }} />

              <Tooltip title="Account settings">
                <IconButton

                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  className={`${classes.profileButtonLogo}`}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: "#1976d2",
                      color: "white",
                    }}
                  ></Avatar>
                </IconButton>
              </Tooltip>

              <Box>
                <Typography variant='h4' style={{ color: 'white', }}>Bala Ganesh</Typography>
                <Typography variant='h5' >Super Admin</Typography>
              </Box>

              <KeyboardArrowDownIcon />

            </Grid>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  // overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  width: '350px',
                  height: 'auto',
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    // ml: -0.5,
                    // mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >


              <MenuItem onClick={handleClose} className={classes.AvatarMenu}>
                <Avatar
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "white",
                  }}
                ></Avatar>{" "}
                <Box style={{ marginLeft: '10px', }}>
                  <Typography variant='h2' style={{ color: '091B29', fontWeight: '700', fontSize: '16px' }}>Bala Ganesh</Typography>
                  <Typography variant='h5' style={{ fontSize: '11px' }}>BalaGanesh@gmail.com</Typography>
                  <Button variant="contained" className={classes.roles} style={{ marginTop: '5px', textTransform: 'none' }}>Super Admin</Button>
                </Box>
              </MenuItem>


              {/* <MenuItem className={classes.roleSelectionContainer}> */}


                <Grid container spacing={1} style={{padding: '10px',}}>
                 
                  <Grid item xs={12}>
                    <Typography variant='h5' style={{ fontSize: '10px', }} >Roles</Typography>
                  </Grid>


                  <Grid item xs={4}>
                    <AppHeaderCard>
                      <Grid container>
                        <Grid item xs={12}  className={classes.subRoleContainer}>
                          <Avatar
                            sx={{
                              backgroundColor: "#FEEAEA",
                              color: "#F17360",
                            }}
                          >
                            <Typography variant='h3'>A</Typography>
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} className={classes.subRoleContainer}>
                          <Typography variant='h2' style={{ marginTop: '10px',  }} >Super Admin</Typography>
                        </Grid>
                      </Grid>
                    </AppHeaderCard>
                  </Grid>


                  <Grid item xs={4} >
                    <AppHeaderCard>
                      <Grid container>
                        <Grid item xs={12} className={classes.subRoleContainer}>
                          <Avatar
                            sx={{
                              backgroundColor: "#DBF0F1",
                              color: "#119DA4",
                            }}
                          >
                            <Typography variant='h3'>CM</Typography>
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '10px', }} className={classes.subRoleContainer}>
                          <Typography variant='h2'>Community Manager</Typography>
                        </Grid>
                      </Grid>
                    </AppHeaderCard>
                  </Grid>



                  <Grid item xs={4} >
                    <AppHeaderCard>
                      <Grid container>
                        <Grid item xs={12} className={classes.subRoleContainer}>
                          <Avatar
                            sx={{
                              backgroundColor: "#FFF2CE ",
                              color: "#D49200",
                            }}
                          >
                            <Typography variant='h3'>SM</Typography>
                          </Avatar>
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: '10px' }} className={classes.subRoleContainer}>
                          <Typography variant='h2'>Security Manager</Typography>
                        </Grid>
                      </Grid>
                    </AppHeaderCard>
                  </Grid>

                  
                  <Grid item xs={4} >
                  <AppHeaderCard>
                    <Grid container>
                      <Grid item xs={12} className={classes.subRoleContainer}>
                        <Avatar
                          sx={{
                            backgroundColor: "#D9E9FF",
                            color: "#4991F2",
                          }}
                        >
                          <Typography variant='h3'>PM</Typography>
                        </Avatar>
                      </Grid>
                      <Grid item xs={12} style={{ marginTop: '10px' }} className={classes.subRoleContainer}>
                        <Typography variant='h2'>Property Manager</Typography>
                      </Grid>
                    </Grid>
                  </AppHeaderCard>
                </Grid>


                <Grid item xs={4} >
                  <AppHeaderCard>
                    <Grid container>
                      <Grid item xs={12} className={classes.subRoleContainer}>
                        <Avatar
                          sx={{
                            backgroundColor: "#DFF1DB",
                            color: "#11A442",
                          }}
                        >
                          <Typography variant='h3'>ZM</Typography>
                        </Avatar>
                      </Grid>
                      <Grid item xs={12} style={{ marginTop: '10px', }} className={classes.subRoleContainer}>
                        <Typography variant='h2'>Zonal Manager</Typography>
                      </Grid>
                    </Grid>
                  </AppHeaderCard>
                </Grid>



                <Grid item xs={4} >
                  <AppHeaderCard>
                    <Grid container>
                      <Grid item xs={12} className={classes.subRoleContainer}>
                        <Avatar
                          sx={{
                            backgroundColor: "#FFEACE ",
                            color: "#D47100",
                          }}
                        >
                          <Typography variant='h3'>CC</Typography>
                        </Avatar>
                      </Grid>
                      <Grid item xs={12} style={{ marginTop: '10px' }} className={classes.subRoleContainer}>
                        <Typography variant='h2'>Customer Care</Typography>
                      </Grid>
                    </Grid>
                  </AppHeaderCard>
                </Grid>


                </Grid>
              {/* </MenuItem> */}

              <MenuItem onClick={handleClose}>
                <Typography variant='h2' style={{ color: ' #4E5A6B' }} >My Profile</Typography>

              </MenuItem>


              <MenuItem onClick={handleClose}>
                <Typography variant='h2' style={{ color: ' #4E5A6B' }} >Privacy Policy</Typography>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Typography variant='h2' style={{ color: ' #4E5A6B' }} >Terms and conditions</Typography>
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <Button variant="outlined" style={{ textTransform: 'none', color: '#FF4B4B', borderColor: '#FF4B4B', borderRadius: '8px' }}>Sign Out</Button>
              </MenuItem>

            </Menu>

          </Grid>
        </Grid>


      </Toolbar>

    </AppBar >
  );
}

const NotificationIcon = () => {
  return (
    <Badge variant="dot" color="primary">
      <Notifications />
    </Badge>
  );
}

export default AppHeader;