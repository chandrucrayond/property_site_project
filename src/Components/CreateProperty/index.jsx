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
  const [handleCreateClicked, setHandleCreateClicked] = useState(false);
  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
  const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
  const classes = CreatePropertyStyle();
  let navigate = useNavigate();


  const { propertiesList, setPropertiesList, errorList, setErrorList } = useContext(DataContext);

  function handleClickingToggle() {
    navigate("/dashboard");
    setErrorList((prevData) => ({
      property_details: {
        cname: "",
        pname: "",
        status: "",
        pperiod: "",
      },

      property_details2: {
        ptype: "",
        ppurp: "",
        rtype: "",
        plist: "",
        image: "",
      },

      address_details: {
        area: "",
        city: "",
        state: "",
      },

      contact_details: {
        bphone: "",
        stdcode: "",
        mphone: "",
        ccode: "",
        email: "",
      },
    }));
    setHandleCreateClicked(false);
  }

  const handleClose = (event) => {
    setOpen(false);
  };

  //setting error list empty when the page loads
  React.useEffect(() => {
    setErrorList({
      property_details: {
        cname: "",
        pname: "",
        status: "",
        pperiod: "",
        pdesc: "",
      },
      property_details2: {
        ptype: "",
        ppurp: "",
        rtype: "",
        munit: "",
        carea: "",
        tarea: "",
        plist: "",
        image: "",
        ybuilt: "",
        hdate: "",
      },
      address_details: {
        area: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      },
      contact_details: {
        bphone: "",
        stdcode: "",
        mphone: "",
        ccode: "",
        website: "",
        email: "",
      },
    });
  }, []);


  //setting input data empty when the page loads
  React.useEffect(() => {
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
        ImageName: "",
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
        stdcode: "",
        mphone: "",
        ccode: "",
        website: "",
        email: "",
      },
    })
  }, []);


  React.useEffect(() => {
    if (handleCreateClicked) {
      const validationFunctions = [
        handlePropertyName_Validation,
        handleImage_Validation,
        handleCarpetArea_Validation,
        handleTotalArea_Validation,
        handlePincode_Validation,
        handlePhone_Validation,
        handleMobile_Validation,
        handleWebsite_Validation,
        handleEmail_Validation
      ];
  
      validationFunctions.forEach((validationFunction) => {
        validationFunction();
      });
    }
  }, [
    handleCreateClicked,
    formData?.property_details?.pname,
    formData?.property_details2?.image,
    formData?.property_details2?.carea,
    formData?.property_details2?.tarea,
    formData?.address_details?.pincode,
    formData?.contact_details?.bphone,
    formData?.contact_details?.mphone,
    formData?.contact_details?.website,
    formData?.contact_details?.email
  ]);
  


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

    if (pname.trim() === "" || pname.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          pname: "Property name is required.",
        },
      }));
      return false;
    } else if (pname.trim().length < 8) {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          pname: "Property name should have at least 8 characters.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        property_details: {
          ...prevData.property_details,
          pname: "",
        },
      }));
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

  // function handlePropertyDescription_Validation() {
  //   const pdesc = formData?.property_details?.pdesc.toString();

  //   if (pdesc.trim() === "" || pdesc.trim() === null) {
  //     setErrorList((prevData) => ({
  //       ...prevData,
  //       property_details: {
  //         ...prevData.property_details,
  //         pdesc: "Property Description is required.",
  //       },
  //     }));
  //     return false;
  //   } else if (pdesc.trim().length < 8) {
  //     setErrorList((prevData) => ({
  //       ...prevData,
  //       property_details: {
  //         ...prevData.property_details,
  //         pdesc: "Property Description should have at least 100 characters.",
  //       },
  //     }));
  //     return false;
  //   } else {
  //     setErrorList((prevData) => ({
  //       ...prevData,
  //       property_details: {
  //         ...prevData.property_details,
  //         pdesc: "",
  //       },
  //     }));
  //     return true;
  //   }
  // }

  function handleImage_Validation() {
    const image = formData?.property_details2?.imageName;
    const allowedFormats = ["jpg", "jpeg", "png", "gif"];
    const fileExtension = image?.name?.split(".").pop().toLowerCase();
    if (!image) {

      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          image: "Image is required.",
        },
      }));
      return false;

    } else if (!allowedFormats.includes(fileExtension)) {

      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          image: "Invalid image format",
        },
      }));
      return false;

    }
    else {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          image: "",
        },
      }));
      return true;
    }
  }

  function handlePropertyType_Validation() {
    const ptype = formData?.property_details2?.ptype.toString();

    if (ptype === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          ptype: "Property type is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }
  }

  function handlePropertyPurpose_Validation() {
    const ppurp = formData?.property_details2?.ppurp.toString();

    if (ppurp === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          ppurp: "Purpose is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleRevenueType_Validation() {
    const rtype = formData?.property_details2?.rtype.toString();

    if (rtype === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          rtype: "Revenue type is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleMeasurementUnit_Validation() {
    const munit = formData?.property_details2?.munit.toString();

    if (munit === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          munit: "Unit is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }
  }

  function handleCarpetArea_Validation() {
    const carea = formData?.property_details2?.carea.toString();

    if (carea.trim() === "" || carea.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          carea: "Carpet area is required.",
        },
      }));
      return false;
    } else if (carea.trim().length < 3) {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          carea: "Carpet area should have at least 3 characters.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          carea: "",
        },
      }));
      return true;
    }
  }


  function handleTotalArea_Validation() {
    const tarea = formData?.property_details2?.tarea.toString();

    if (tarea.trim() === "" || tarea.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          tarea: "Total area is required.",
        },
      }));
      return false;
    } else if (tarea.trim().length < 3) {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          tarea: "Total area should have at least 3 characters.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          tarea: "",
        },
      }));
      return true;
    }
  }

  function handleYearBuilt_Validation() {
    const ybuilt = formData?.property_details2?.ybuilt.toString();

    if (ybuilt === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          ybuilt: "Year built is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleHandover_Validation() {
    const hdate = formData?.property_details2?.hdate.toString();

    if (hdate === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          hdate: "Handover date is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handlePublicListing_Validation() {
    const plist = formData?.property_details2?.plist.toString();

    if (plist === "") {
      setErrorList((prevData) => ({
        ...prevData,
        property_details2: {
          ...prevData.property_details2,
          plist: "Listing detail is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleArea_Validation() {
    const area = formData?.address_details?.area.toString();

    if (area === "") {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          area: "Area is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleCity_Validation() {
    const city = formData?.address_details?.city.toString();

    if (city === "") {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          city: "City is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleState_Validation() {
    const state = formData?.address_details?.state.toString();

    if (state === "") {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          state: "State is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }

  }

  function handleCountry_Validation() {
    const country = formData?.address_details?.country.toString();

    if (country === "") {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          country: "Country is required.",
        },
      }));
      return false;
    }
    else {
      return true;
    }
  }


  function handlePincode_Validation() {
    const pincode = formData?.address_details?.pincode;

    if (pincode.trim() === "" || pincode.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          pincode: "Pincode is required.",
        },
      }));
      return false;
    } else if (pincode.trim().length < 6 || pincode.trim().length > 6) {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          pincode: "Pincode should be 6 digits.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        address_details: {
          ...prevData.address_details,
          pincode: "",
        },
      }));
      return true;
    }
  }

  function handlePhone_Validation(){
    const bphone = formData?.contact_details?.bphone;

    if (bphone.trim() === "" || bphone.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          bphone: "Phone is required.",
        },
      }));
      return false;
    } else if (bphone.trim().length < 7 || bphone.trim().length > 7) {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          bphone: "Phone should be 7 digits.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          bphone: "",
        },
      }));
      return true;
    }
  }

  function handleMobile_Validation(){
    const mphone = formData?.contact_details?.mphone;

    if (mphone.trim() === "" || mphone.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          mphone: "Mobile is required.",
        },
      }));
      return false;
    } else if (mphone.trim().length < 10 || mphone.trim().length > 10) {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          mphone: "Mobile should be 10 digits.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          mphone: "",
        },
      }));
      return true;
    }
  }

  function isValidURL(url) {
    const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const matches = url.match(regex);
    return matches !== null;
  }  

  function handleWebsite_Validation(){
    const website = formData?.contact_details?.website;

    if (website.trim() === "" || website.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          website: "Website is required.",
        },
      }));
      return false;
    } else if (!isValidURL(website)){
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          website: "Enter a valid website URL.",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          website: "",
        },
      }));
      return true;
    }
  }

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handleEmail_Validation(){
    const email = formData?.contact_details?.email;

    if (email.trim() === "" || email.trim() === null) {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          email: "Email is required.",
        },
      }));
      return false;
    } else if (!isValidEmail(email)){
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          email: "Enter a valid email",
        },
      }));
      return false;
    } else {
      setErrorList((prevData) => ({
        ...prevData,
        contact_details: {
          ...prevData.contact_details,
          email: "",
        },
      }));
      return true;
    }
  }

  function handleClickingCreate() {
    setHandleCreateClicked(true);
    const cname = handleCompanyName_Validation();
    const pname = handlePropertyName_Validation();
    const pperiod = handlePaymentPeriod_Validation();
    const status = handleStatus_Validation();
    const image = handleImage_Validation();
    const ptype = handlePropertyType_Validation();
    const ppurp = handlePropertyPurpose_Validation();
    const rtype = handleRevenueType_Validation();
    const munit = handleMeasurementUnit_Validation();
    const carea = handleCarpetArea_Validation();
    const tarea = handleTotalArea_Validation();
    const ybuilt = handleYearBuilt_Validation();
    const hdate = handleHandover_Validation();
    const plist = handlePublicListing_Validation();
    const area = handleArea_Validation();
    const city = handleCity_Validation();
    const state = handleState_Validation();
    const country = handleCountry_Validation();
    const pincode = handlePincode_Validation();
    const bphone = handlePhone_Validation();
    const mphone = handleMobile_Validation();
    const website = handleWebsite_Validation();
    const email = handleEmail_Validation();


    if (cname && pname && pperiod && status && image && ptype &&
      ppurp && rtype && munit && carea && tarea && ybuilt && hdate
      && plist && area && city && state && country && pincode && 
      bphone && mphone && website && email) {
      setHandleCreateClicked(false);
      setErrorList((prevData) => ({
        property_details: {
          cname: "",
          pname: "",
          status: "",
          pperiod: "",
        },

        property_details2: {
          ptype: "",
          ppurp: "",
          rtype: "",
          plist: "",
          image: "",
        },

        address_details: {
          area: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
        },

        contact_details: {
          bphone: "",
          stdcode: "",
          mphone: "",
          ccode: "",
          email: "",
        },
      }));
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
