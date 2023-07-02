import { AppBar, Card, Grid, IconButton, Typography, useMediaQuery, Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import EditPropertyStyle from "./style";
import theme from "../ThemeProvider";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useParams, useNavigate } from "react-router-dom";
import CreateCard, { NormalCard } from "../CreateCard";
import CreatePropertySection1 from "../CreatePropertySection1";
import CreatePropertySection2 from "../CreatePropertySection2";
import CreatePropertySection3 from "../CreatePropertySection3";
import CreatePropertySection4 from "../CreatePropertySection4";
import CreatePropertySection5 from "../CreatePropertySection5";
import CreatePropertySectionEnd from "../CreatePropertySectionEnd";
import { useContext } from 'react';
import { DataContext } from "../../Context";



const EditProperty = () => {
  // debugger
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
  const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));

  const classes = EditPropertyStyle();
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  const { propertiesList, setPropertiesList } = React.useContext(DataContext);
  const [property, setProperty] = React.useState(null);
  let { propertyId } = useParams();

  React.useEffect(() => {
    if (propertiesList.length > 0) {
      const property = propertiesList[propertyId];
      setProperty(property);
    }
  }, [propertyId, propertiesList]);

  function handleClickingToggle() {
    navigate("/viewProperties");
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, section, element) => {
    setProperty((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [element]: event.target.value,
      },
    }));
  };

  function handleClickingUpdate() {
    setOpen(true);
    const index = parseInt(propertyId);
    console.log("Property id is " + propertyId);
    console.log("Index is " + index);
   
    if(propertiesList[index]){
    // propertyToUpdate.property_details.pname = 'New Property Name';
    propertiesList[index] = property;
    setPropertiesList(propertiesList);
    navigate("/viewProperties");
    console.log("Property Updated Successfully");
    console.log(propertiesList);
    }
  
  }
  return (
    <>

      <AppBar className={`${classes.appBar} ${isMdScreen ? classes.appBarTablet : ''} ${isSmScreen ? classes.appBarMobile : ''}`}>
        <IconButton className={classes.toggleIcon} onClick={handleClickingToggle}> <ChevronLeftIcon /></IconButton> <Typography variant="h2" color={"black"} className={classes.togglePara}>Edit Property </Typography>
      </AppBar>

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={1000} open={open} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: '#5AC782', color: '#FFFFFF' }}>
          Property Created Successfully
        </Alert>
      </Snackbar>


      <div className={`${classes.createContainer}
       ${isMdScreen ? classes.createContainerTablet : ''} 
        ${isSmScreen ? classes.createContainerMobile : ''}`} >

        {property && (
          <Grid container spacing={2}>

            <Grid item xs={12} md={2}>
              <CreateCard> <CreatePropertySection1 /></CreateCard>
            </Grid>

            <Grid item xs={12} md={10}>
              <CreateCard> <CreatePropertySection2 data={property} setData={handleChange} /></CreateCard>
            </Grid>

            <Grid item xs={12} >
              <NormalCard><CreatePropertySection3 data={property} setData={handleChange} /></NormalCard>
            </Grid>

            <Grid item xs={12} >
              <NormalCard><CreatePropertySection4 data={property} setData={handleChange} /></NormalCard>
            </Grid>


            <Grid item xs={12} >
              <NormalCard><CreatePropertySection5 data={property} setData={handleChange} /></NormalCard>
            </Grid>

            <Grid item xs={12} >
              <CreatePropertySectionEnd type="Update" data={property} setData={handleChange} onCancel={handleClickingToggle} onCreate={handleClickingUpdate} />
            </Grid>
          </Grid>
        )}

      </div>
    </>
  );
};


export default EditProperty;
