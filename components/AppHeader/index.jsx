import { AppBar, InputBase, Toolbar, Grid, Stack, Collapse } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, useNavigate, Route, Routes } from "react-router-dom";
import logo from "../../public/DNT Logo White-042x.png";
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

// Inline styled mui elements

const Logo = styled("img")({
  maxWidth: "150px",
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
    navigate("/products");
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

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },


  });
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.header}>
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item xs={6} md={2} className={classes.logoImageSection} style={{ justifyContent: 'start', }}>
                {isMdScreen ? (
                  <>
                    <Grid >
                      <Grid item xs={12}>
                        <IconButton onClick={handleClickingMenuIcon}>
                          <img
                            src="/DNT Logo White-042x.png"
                            alt="Menu"
                            style={{
                              width: 28,
                              height: 28,
                            }}
                            className={`${classes.menuButtonLogo}`}
                          />
                        </IconButton>
                      </Grid>

                    </Grid>
                  </>
                ) : (
                  <>
                    <Logo
                      src={logo}
                      alt="Logo"
                      onClick={handleClickingLogo}
                      style={{ cursor: 'pointer', }}
                      sx={{
                        width: 28,
                        height: 28,
                      }}
                    />

                  </>
                )}
              </Grid>


              <Grid item xs={8} md={8} className={classes.paraSection} style={{ display: isMdScreen ? 'none' : 'flex' }}>
                <Stack spacing={5} direction="row" className={classes.paraStack}>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara} ${clickedButton === 'Home' ? classes.clicked : ''}`}
                    onClick={() => handleButtonClick('Home')}
                  >
                    Home
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara} ${clickedButton === 'Products' ? classes.clicked : ''}`}
                    onClick={() => handleButtonClick('Products')}
                  >
                    Products
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara} ${clickedButton === 'Services' ? classes.clicked : ''}`}
                    onClick={() => handleButtonClick('Services')}
                  >
                    Services
                  </Typography>
                  <Typography
                    variant="h4"
                    className={`${classes.appHeaderPara} ${clickedButton === 'About' ? classes.clicked : ''}`}
                    onClick={() => handleButtonClick('About')}
                  >
                    About us
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={2} style={{ display: 'flex', justifyContent: 'end', alignItems: 'baseline', marginTop: '5px', }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
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

      </ThemeProvider >

    </>
  );
}

export default AppHeader;