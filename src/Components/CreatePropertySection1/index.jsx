import { Typography, useMediaQuery, Grid, Button, Avatar, Box } from "@mui/material";
import React from "react";
import { CreatePropertySection1Style } from "./style";
import UploadImage from "../../icons/Create-Property/UploadImage.jsx";
import RoundedImage from "../../icons/Create-Property/RoundedImage";
import { useContext } from 'react';
import { DataContext } from "../../Context";
import {FormHelperText} from "@mui/material";

const CreatePropertySection1 = ({ data, setFormData, mode, handleImageChange }) => {
    const classes = CreatePropertySection1Style();
    const {  property_details2 } = data;
    const { errorList, setErrorList } = useContext(DataContext);
    const [selectedImage, setSelectedImage] = React.useState((mode === "edit") ? property_details2.image : '');

    const fileInputRef = React.useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        if (mode === "edit") {
            handleImageChange(URL.createObjectURL(file), file);
        }
        else{
            handleImageAdd(URL.createObjectURL(file), file);
        }
    };

    const handleImageAdd = (imageUrl, file) => {
        setFormData((prevState) => ({
          ...prevState,
          property_details2: {
            ...prevState.property_details2,
            image: imageUrl,
            imageName: file,
          },
        }));
      };


    return (
        <Grid container>
            <Grid item xs={12} className={classes.subContainer}>
                <Typography variant='h3' style={{ color: '#4E5A6B', }}>PROPERTY IMAGE</Typography>
            </Grid>
            <Grid item xs={12} className={classes.subContainer}>

                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt="Uploaded"
                        width={130}
                        height={130}
                        style={{
                            borderRadius: "50%",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                            maxWidth: "100%",
                            maxHeight: "100%",
                        }}
                    />
                ) : (
                    <Box style={{
                        width: '130px', height: '130px', backgroundColor: "#F2F4F7", borderRadius: "50%", textAlign: "center", maxWidth: "100%",
                        maxHeight: "100%",
                    }}>
                        <UploadImage />
                    </Box>
                )}
                 

            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }} >

                <Button variant="outlined" className={classes.uploadButton} onClick={handleButtonClick} >
                    <Typography variant='h5' style={{ color: '#071741', textTransform: 'capitalize', padding: 0, margin: 0 }}>
                        {selectedImage ? 'Change Image' : 'Upload Image'}
                    </Typography>
                </Button>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />

            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }} >
            {(errorList?.property_details2?.image!=='')? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.property_details2?.image}</FormHelperText> : ''}
            </Grid> 
        </Grid>
    );
}

export default CreatePropertySection1;

