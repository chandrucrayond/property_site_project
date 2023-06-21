import { AppBar, Card, Grid, IconButton, Typography, useMediaQuery, Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { ViewPropertiesStyle } from "./style";
import theme from "../ThemeProvider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import CreateCard, { NormalCard } from "../CreateCard";
import CreatePropertySection2 from "../CreatePropertySection2";
import CreatePropertySection3 from "../CreatePropertySection3";
import ViewProperties_Section1_SearchFilter from "../ViewProperties_Section1_SearchFilter";
import ViewProperties_Section2_Table from "../ViewProperties_Section2_Table";


const ViewProperties = () => {
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
    const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
    const classes = ViewPropertiesStyle();

    let navigate = useNavigate();
    function handleClickingToggle() {
        navigate("/dashboard");
    }

    return (
        <>
            <AppBar className={`${classes.appBar} ${isMdScreen ? classes.appBarTablet : ''} ${isSmScreen ? classes.appBarMobile : ''}`}>
                <IconButton className={classes.toggleIcon} onClick={handleClickingToggle}> <ChevronLeftIcon /></IconButton> <Typography variant="h2" color={"black"} className={classes.togglePara}>Properties</Typography>
            </AppBar>


            <div className={`${classes.createContainer}
       ${isMdScreen ? classes.createContainerTablet : ''} 
        ${isSmScreen ? classes.createContainerMobile : ''}`} >

                <Grid container>

                    <Grid item xs={12} >
                        <NormalCard>
                            < ViewProperties_Section1_SearchFilter />
                        </NormalCard>
                    </Grid>


                    <Grid item xs={12} >
                        <NormalCard>
                            <ViewProperties_Section2_Table />
                        </NormalCard>
                    </Grid>

                </Grid>

            </div>
        </>
    );
};

export default ViewProperties;
