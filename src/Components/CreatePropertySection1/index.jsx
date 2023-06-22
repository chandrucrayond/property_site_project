import { Typography, useMediaQuery, Grid, Button, Avatar, Box } from "@mui/material";
import React from "react";
import { CreatePropertySection1Style } from "./style";
import UploadImage from "../../icons/Create-Property/UploadImage.jsx";

const CreatePropertySection1 = ({data, setData}) => {
    const classes = CreatePropertySection1Style();
   

    return (
        <Grid container>
            <Grid item xs={12} className={classes.subContainer}>
                <Typography variant='h4' style={{ color: '#4E5A6B', }}>PROPERTY IMAGE</Typography>
            </Grid>
            <Grid item xs={12} className={classes.subContainer}>
                <div className={classes.imageContainer}>
                    <div className={classes.imageWrapper}>
                        <UploadImage />
                    </div> 
                </div>
            </Grid>
            <Grid item xs={12} className={classes.subContainer}>
                <Button variant="outlined" className={classes.uploadButton}><Typography variant='h5' style={{color: '#071741', textTransform: 'capitalize'}}>Upload Image</Typography></Button>
            </Grid>
        </Grid>
    );
}

export default CreatePropertySection1;
