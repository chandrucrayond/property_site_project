import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Grid, } from '@mui/material';
import AppHeader from '../AppHeader';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { SharedLayoutStyle } from "./style";
import theme from "../ThemeProvider/index.jsx";
import SideBar from "../SideBar/index.jsx";
import Bar from '../Bar';

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
          
          <Grid item xs={12} className={classes.sideBarStyle} >
            {isMdScreen  ? <Bar /> : <SideBar />} 
          </Grid> 

        </Grid>

  );
}

export default SharedLayout;
