import { AppBar, InputBase, Toolbar, Grid, Stack, Collapse } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, useNavigate, Route, Routes } from "react-router-dom";
import logo from "../../src/icons/Sign-in/DNT Logo White-042x.png";
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
import LogoImage from "../../src/icons/Dashboard/DNT Logo White-04@2x.png"
import theme from "../ThemeProvider/index.jsx";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Inline styled mui elements

const Logo = styled("img")({
  maxWidth: "300px",
  marginRight: "8px",
  marginLeft: "20px",
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const CusMenuItem = styled(MenuItem)({
  fontSize: "13px",
  fontFamily: "Montserrat , sans-serif",
  fontWeight: "500",
});

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


          <Grid item xs={6} sm={6} style={{ display: isSmScreen ? 'none' : 'flex', cursor: 'pointer' }} >
            <Grid container sx={{ alignItems: 'center', justifyContent: 'end',}}>
             
                <NotificationIcon variant="dot" />
                <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '25px', marginLeft: '20px', marginRight: '20px' }} />
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
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
                      <Typography variant='h4' style={{color: 'white',}}>Bala Ganesh</Typography>
                      <Typography variant='h5'>Super Admin</Typography>
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
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <CusMenuItem onClick={handleClose}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <Face />
                </Avatar>{" "}
                Profile
              </CusMenuItem>
              <CusMenuItem onClick={handleClose}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <Assignment />
                </Avatar>{" "}
                Order's
              </CusMenuItem>
              <Divider />
              <CusMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" sx={{ color: "#1e88e5" }} />
                </ListItemIcon>
                24/7 Customer Care
              </CusMenuItem>
              <CusMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" sx={{ color: "#212121" }} />
                </ListItemIcon>
                Settings
              </CusMenuItem>
              <CusMenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </CusMenuItem>
            </Menu>

          </Grid>
        </Grid>


      </Toolbar>

      <Collapse in={menuItemClicked} sx={{}}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={`${classes.appHeaderPara} ${classes.menuButtonPara} ${clickedButton === 'Home' ? classes.clicked : ''}`}
            onClick={() => handleButtonClick('Home')}
          >
            Home
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={`${classes.appHeaderPara} ${classes.menuButtonPara} ${clickedButton === 'Products' ? classes.clicked : ''}`}
            onClick={() => handleButtonClick('Products')}
          >
            Products
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={`${classes.appHeaderPara} ${classes.menuButtonPara} ${clickedButton === 'Services' ? classes.clicked : ''}`}
            onClick={() => handleButtonClick('Services')}
          >
            Services
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={`${classes.appHeaderPara} ${classes.menuButtonPara} ${clickedButton === 'About' ? classes.clicked : ''}`}
            onClick={() => handleButtonClick('About')}
          >
            About us
          </Typography>
        </Grid>
      </Collapse>

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