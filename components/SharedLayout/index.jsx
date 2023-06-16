import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Fab, Popover, Collapse, Fade, Slide } from '@mui/material';
import AppHeader from '../AppHeader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import { jsonData } from '../Json';
import { SharedLayoutStyle } from "./style";
import theme from "../ThemeProvider/index.jsx";
import SideBar from "../SideBar/index.jsx";

function SharedLayout() {
 

  const isMdScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const classes = SharedLayoutStyle();
  const [open, setOpen] = useState(false);

  return (

        <Grid container>

          <Grid item xs={12} className={classes.Style}>
            <AppHeader />
          </Grid>

          <Grid item xs={12} className={classes.outletStyle} >
              <Outlet />
          </Grid>
          
          {/* <Grid item  xs={12} className={classes.sideBarStyle}>
                <SideBar />
          </Grid>  */}

        </Grid>

  );
}

export default SharedLayout;
