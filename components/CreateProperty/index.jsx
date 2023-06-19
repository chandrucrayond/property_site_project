import { AppBar, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { CreatePropertyStyle } from "./style";
import theme from "../ThemeProvider";


const CreateProperty = () => {
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
    const classes = CreatePropertyStyle();
    return (
        <>
      <AppBar className={` ${isMdScreen ? classes.appBarTablet : classes.appBar}`}>
        <Typography variant="h1" color={"black"}>Create New Property</Typography>
      </AppBar>
      <div>Hello mam</div>
      </>
    );
};

export default CreateProperty;
