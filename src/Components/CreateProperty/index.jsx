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
import { DataContext } from "../../Context";



const CreateProperty = ({ formData, setFormData, handleChange }) => {
  // debugger
  const [open, setOpen] = React.useState(false);
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
  const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
  const classes = CreatePropertyStyle();
  let navigate = useNavigate();


  const { propertiesList, setPropertiesList, errorList, setErrorList } = useContext(DataContext);

  function handleClickingToggle() {
    navigate("/dashboard");
  }

  const handleClose = (event) => {
    setOpen(false);
  };


  React.useEffect(() => {
    console.log(errorList?.property_details?.cname);
  }, [errorList?.property_details?.cname]);

  React.useEffect(() => {
    console.log(errorList?.property_details?.pname);
  }, [errorList?.property_details?.pname]);


  function handleCompanyName_Validation() {
    const cname = formData?.property_details?.cname.toString();

    if (cname === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          cname: "Company name is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }


  function handlePropertyName_Validation() {
    const pname = formData?.property_details?.pname.toString();

    if (pname === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          pname: "Property name is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }
  }

  function handlePaymentPeriod_Validation() {
    const pperiod = formData?.property_details?.pperiod.toString();

    if (pperiod === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          pperiod: "Payment period is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleStatus_Validation() {
    const status = formData?.property_details?.status.toString();

    if (status === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          status: "Status is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleClickingCreate() {
    const cname = handleCompanyName_Validation();
    const pname = handlePropertyName_Validation();
    const pperiod = handlePaymentPeriod_Validation();
    const status = handleStatus_Validation();
    if ( cname && pname && pperiod && status) {
      setOpen(true);
      setPropertiesList((prevData) => [...prevData, formData])
      setFormData({
        property_details: {
          cname: "",
          pname: "",
          pperiod: "",
          status: "",
          pdesc: "",
        },

        property_details2: {
          ptype: "",
          ppurp: "",
          rtype: "",
          munit: "",
          carea: "",
          tarea: "",
          ybuilt: "",
          hdate: "",
          plist: "",
          pets: "false",
          image: "",
        },

        address_details: {
          lang: "",
          lat: "",
          dno: "",
          aline1: "",
          aline2: "",
          landmark: "",
          area: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
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
      navigate("/viewProperties");
    }
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
            <CreateCard> <CreatePropertySection1 data={formData} setFormData={setFormData} mode={"create"} /></CreateCard>
          </Grid>

          <Grid item xs={12} md={10}>
            <CreateCard> <CreatePropertySection2 data={formData} setData={handleChange} mode={"create"} setFormData={setFormData} /></CreateCard>
          </Grid>


          <Grid item xs={12} >
            <NormalCard><CreatePropertySection3 data={formData} setData={handleChange} mode={"create"} setFormData={setFormData} /></NormalCard>
          </Grid>

          <Grid item xs={12} >
            <NormalCard><CreatePropertySection4 data={formData} setData={handleChange} /></NormalCard>
          </Grid>


          <Grid item xs={12} >
            <NormalCard><CreatePropertySection5 data={formData} setData={handleChange} /></NormalCard>
          </Grid>


          <Grid item xs={12} >
            <CreatePropertySectionEnd type="Create" data={formData} setData={handleChange} onCancel={handleClickingToggle} onCreate={handleClickingCreate} />
          </Grid>

        </Grid>

      </div >

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={1000} open={open} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: '#5AC782', color: '#FFFFFF' }}>
          Property Created Successfully
        </Alert>
      </Snackbar>
    </>
  );
};


export default CreateProperty;
