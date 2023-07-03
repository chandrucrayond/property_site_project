import { Typography, useMediaQuery, Grid, Button, Avatar, Box } from "@mui/material";
import React from "react";
import { CreatePropertySection1Style } from "./style";
import UploadImage from "../../icons/Create-Property/UploadImage.jsx";
import RoundedImage from "../../icons/Create-Property/RoundedImage";

const CreatePropertySection1 = ({ data,  setFormData}) => {
    const classes = CreatePropertySection1Style();
    const [selectedImage, setSelectedImage] = React.useState(null);

    const fileInputRef = React.useRef(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        handleImageAdd(URL.createObjectURL(file));
    };

    const handleImageAdd = (value) => {
        setFormData((prevState) => ({
          ...prevState,
          property_details: {
            ...prevState.property_details,
            image: value,
          },
        }));    
      };
      

    return (
        <Grid container>
            <Grid item xs={12} className={classes.subContainer}>
                <Typography variant='h4' style={{ color: '#4E5A6B', }}>PROPERTY IMAGE</Typography>
            </Grid>
            <Grid item xs={12} className={classes.subContainer}>

                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt="Uploaded"
                        width={120}
                        height={120}
                        style={{
                            borderRadius: "50%",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                        }}
                    />
                ) : (
                    <Box style={{ width: '120px', height: '120px', backgroundColor: "#F2F4F7", borderRadius: "50%", textAlign: "center", }}>
                        <UploadImage />
                    </Box>
                )}

            </Grid>
            <Grid item xs={12} className={classes.subContainer}>
                {/* <Button variant="outlined" className={classes.uploadButton}><Typography variant='h5' style={{ color: '#071741', textTransform: 'capitalize' }}>Upload Image</Typography></Button>
                <input type="file" onChange={handleImageUpload} /> */}

                <Button variant="outlined" className={classes.uploadButton} onClick={handleButtonClick}>
                    <Typography variant='h5' style={{ color: '#071741', textTransform: 'capitalize', padding:'none', margin:'none', }}>
                        Upload Image
                    </Typography>
                </Button>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />

            </Grid>
        </Grid>
    );
}

export default CreatePropertySection1;
