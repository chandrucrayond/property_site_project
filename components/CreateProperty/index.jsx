import { AppBar, Card, Grid, IconButton, Typography, useMediaQuery, Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { CreatePropertyStyle } from "./style";
import theme from "../ThemeProvider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import CreateCard, { NormalCard } from "../CreateCard";
import CreatePropertySection1 from "../CreatePropertySection1";
import CreatePropertySection2 from "../CreatePropertySection2";
import CreatePropertySection3 from "../CreatePropertySection3";
import CreatePropertySection4 from "../CreatePropertySection4";
import CreatePropertySection5 from "../CreatePropertySection5";
import CreatePropertySectionEnd from "../CreatePropertySectionEnd";
import { useContext } from 'react';
import { MyContext } from '../../src/main';

const CreateProperty = () => {
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
  const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
  const classes = CreatePropertyStyle();
  let navigate = useNavigate();

  
  const { properties, setProperties } = useContext(MyContext);


  function handleClickingToggle() {
    navigate("/dashboard");
  }


  function handleClickingCreate() {
    setOpen(true);
    setProperties({formData});
    setTimeout(() => {
      navigate("/createProperty");
    }, 1000); // Delay of 1 second (1000 milliseconds)
  }


  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleChange = (event, section, element) => {

    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [element]: event.target.value,
      },
    }));

  };


  const [formData, setFormData] = useState({

    property_details: {
      cname: "Company Name",
      pname: "",
      pperiod: "Daily",
      status: "Active",
      pdesc: "",
    },

    property_details2: {
      ptype: "Apartment",
      ppurp: "Residential",
      rtype: "Lease",
      munit: "Sq.ft",
      carea: "",
      tarea: "",
      ybuilt: "2020-01-01",
      hdate: "2023-01-01",
      plist: "",
      pets: "false",
    },

    address_details: {
      lang: "",
      lat: "",
      dno: "",
      aline1: "",
      aline2: "",
      landmark: "",
      area: "Neelankarai",
      city: "Chennai",
      state: "Tamilnadu",
      country: "",
      pincode: "Pincode",
    },

    contact_details: {
      bphone: "",
      stdcode: "044",
      mphone: "",
      ccode: "+91",
      website: "",
      email: "",
    },
  });


  

  return (
    <>
      <AppBar className={`${classes.appBar} ${isMdScreen ? classes.appBarTablet : ''} ${isSmScreen ? classes.appBarMobile : ''}`}>
        <IconButton className={classes.toggleIcon} onClick={handleClickingToggle}> <ChevronLeftIcon /></IconButton> <Typography variant="h2" color={"black"} className={classes.togglePara}>Create New Property</Typography>
      </AppBar>

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: '#5AC782', color: '#FFFFFF' }}>
        Property Created Successfully        
        </Alert>
      </Snackbar>


      <div className={`${classes.createContainer}
       ${isMdScreen ? classes.createContainerTablet : ''} 
        ${isSmScreen ? classes.createContainerMobile : ''}`} >

        <Grid container spacing={2}>

          <Grid item xs={12} md={2}>
            <CreateCard> <CreatePropertySection1 /></CreateCard>
          </Grid>

          <Grid item xs={12} md={10}>
            <CreateCard> <CreatePropertySection2 data={formData} setData={handleChange} /></CreateCard>
          </Grid>


          <Grid item xs={12} >
            <NormalCard><CreatePropertySection3 data={formData} setData={handleChange} /></NormalCard>
          </Grid>

          <Grid item xs={12} >
            <NormalCard><CreatePropertySection4 data={formData} setData={handleChange} /></NormalCard>
          </Grid>


          <Grid item xs={12} >
            <NormalCard><CreatePropertySection5 data={formData} setData={handleChange} /></NormalCard>
          </Grid>


          <Grid item xs={12} >
            <CreatePropertySectionEnd data={formData} setData={handleChange} onCancel={handleClickingToggle} onCreate={handleClickingCreate} />
          </Grid>
        </Grid>



      </div>
    </>
  );
};

export default CreateProperty;
