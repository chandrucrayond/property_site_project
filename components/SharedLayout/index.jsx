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
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const classes = SharedLayoutStyle();

  return (

        <Grid container>

          <Grid item xs={12} className={classes.Style}>
            <AppHeader />
          </Grid>

          <Grid item xs={12} className={` ${isMdScreen ? classes.outletStyleTablet : classes.outletStyle}`} >
              <Outlet />
          </Grid>
          
          <Grid item xs={12} className={classes.sideBarStyle} sx={{display : isMdScreen ? 'none' : 'block'}}>
                <SideBar />
          </Grid> 

        </Grid>

  );
}

export default SharedLayout;
