import { AppBar, Card, Grid, IconButton, Typography, useMediaQuery, Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { ViewPropertiesStyle } from "./style";
import theme from "../ThemeProvider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import CreateCard, { NormalCard, NormalCardZeroBottom, NormalCardNoRadius, NormalCardZeroTop } from "../CreateCard";
import ViewProperties_Section1_SearchFilter from "../ViewProperties_Section1_SearchFilter";
import ViewProperties_Section2_Table from "../ViewProperties_Section2_Table";
import { DataContext } from "../../Context";
import ViewProperties_Section3_Pagination from "../ViewProperties_Section3_Pagination";
import ViewProperties_Section2_Card from "../ViewProperties_Section2_Card/index";


const ViewProperties = () => {
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
    const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
    const classes = ViewPropertiesStyle();

    let navigate = useNavigate();
    function handleClickingToggle() {
        navigate("/dashboard");
    }

    // Inside your component
    const [searchQuery, setSearchQuery] = useState('');


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
                        <NormalCardZeroBottom >
                            < ViewProperties_Section1_SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                        </NormalCardZeroBottom>
                    </Grid>


                    <Grid item xs={12} >
                        <NormalCardNoRadius>
                            {isSmScreen ? (<ViewProperties_Section2_Card searchQuery={searchQuery} setSearchQuery={setSearchQuery} />) : (<ViewProperties_Section2_Table searchQuery={searchQuery} setSearchQuery={setSearchQuery} />)}
                        </NormalCardNoRadius>
                    </Grid>


                    <Grid item xs={12} >
                        <NormalCardZeroTop>
                            <ViewProperties_Section3_Pagination />
                        </NormalCardZeroTop>
                    </Grid>


                </Grid>

            </div>
        </>
    );
};

export default ViewProperties;
