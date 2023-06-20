import { AppBar, Card, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { CreatePropertyStyle } from "./style";
import theme from "../ThemeProvider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import CreateCard, {NormalCard} from "../CreateCard";
import CreatePropertySection1 from "../CreatePropertySection1";
import CreatePropertySection2 from "../CreatePropertySection2";
import CreatePropertySection3 from "../CreatePropertySection3";


const CreateProperty = () => {
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
  const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
  const classes = CreatePropertyStyle();
  let navigate = useNavigate();
  function handleClickingToggle() {
    navigate("/dashboard");
  }

  return (
    <>
      <AppBar className={`${classes.appBar} ${isMdScreen ? classes.appBarTablet : ''} ${isSmScreen ? classes.appBarMobile : ''}`}>
        <IconButton className={classes.toggleIcon} onClick={handleClickingToggle}> <ChevronLeftIcon /></IconButton> <Typography variant="h2" color={"black"} className={classes.togglePara}>Create New Property</Typography>
      </AppBar>



      <div className={`${classes.createContainer}
       ${isMdScreen ? classes.createContainerTablet : ''} 
        ${isSmScreen ? classes.createContainerMobile : ''}`} >

        <Grid container spacing={2}>

          <Grid item xs={12} md={2}>
            <CreateCard> <CreatePropertySection1 /></CreateCard>
          </Grid>

          <Grid item xs={12} md={10}>
            <CreateCard> <CreatePropertySection2 /></CreateCard>
          </Grid>


          <Grid item xs={12} >
          <NormalCard><CreatePropertySection3 /></NormalCard>
          </Grid>


        </Grid>
      </div>
    </>
  );
};

export default CreateProperty;
