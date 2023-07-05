import { Typography, useMediaQuery, Grid, Button, TextField, Box, Divider, InputAdornment } from "@mui/material";
import React from "react";
import { CreatePropertySection5Style } from "./style";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { Input } from '@mui/material';
import { InputBase } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from "../../Context";
import { FormHelperText } from "@mui/material";


const CreatePropertySection5 = ({ data, setData }) => {

    const classes = CreatePropertySection5Style();
    const { contact_details } = data;

    const handleContactDetailsChange = (event, element) => {
        setData(event, 'contact_details', element);
    };

    const { propertiesList, setPropertiesList, errorList, setErrorList } = useContext(DataContext);
    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h4' style={{ color: '#4E5A6B', marginBottom: '15px', }}>CONTACT & OTHER INFORMATION</Typography>
            </Grid>
            <Grid item xs={12}  >
                <Grid container spacing={2}>

                    {/* 1st grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Business Phone</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="number"
                                placeholder="Phone"
                                value={contact_details.bphone}
                                onChange={(event) => handleContactDetailsChange(event, 'bphone')}
                                onKeyDown={(event) => {
                                    if (event.key === 'e' || event.key === 'E') {
                                        event.preventDefault();
                                    }
                                }}
                                fullWidth
                                className={`${classes.InputStyling} ${classes.numberInput} ${classes.InnerInputStyling}`}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Select
                                            value={contact_details.stdcode}
                                            onChange={(event) => handleContactDetailsChange(event, 'stdcode')}
                                            style={{ opacity: contact_details.stdcode ? '1.0' : '0.6' }}

                                        >
                                            <MenuItem value="044"><Typography variant="h2">044</Typography></MenuItem>
                                            <MenuItem value="043"><Typography variant="h2">043</Typography></MenuItem>
                                            <MenuItem value="042"><Typography variant="h2">042</Typography></MenuItem>
                                            <MenuItem value="001"><Typography variant="h2">001</Typography></MenuItem>
                                            {/* Add more country code options */}
                                        </Select>
                                        <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '25px', }} />
                                    </InputAdornment>
                                }
                            />
                            {(errorList?.contact_details?.bphone !== '') ? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.contact_details?.bphone}</FormHelperText> : ''}
                        </FormControl>
                    </Grid>


                    {/* 2nd grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Mobile Phone</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="number"
                                className={`${classes.InputStyling} ${classes.numberInput} ${classes.InnerInputStyling}`}
                                placeholder="Mobile Phone"
                                value={contact_details.mphone}
                                onChange={(event) => handleContactDetailsChange(event, 'mphone')}
                                onKeyDown={(event) => {
                                    if (event.key === 'e' || event.key === 'E') {
                                        event.preventDefault();
                                    }
                                }}
                                fullWidth
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Select
                                            value={contact_details.ccode}
                                            onChange={(event) => handleContactDetailsChange(event, 'ccode')}
                                            className={classes.ccodeStyling}
                                        >
                                            <MenuItem value="+91"><Typography variant="h2">+91</Typography></MenuItem>
                                            <MenuItem value="+02"><Typography variant="h2">+02</Typography></MenuItem>
                                            <MenuItem value="+35"><Typography variant="h2">+35</Typography></MenuItem>
                                            {/* Add more country code options */}
                                        </Select>
                                        <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '25px', }} />
                                    </InputAdornment>
                                }

                            />
                            {(errorList?.contact_details?.mphone !== '') ? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.contact_details?.mphone}</FormHelperText> : ''}
                        </FormControl>
                    </Grid>


                    {/* 3rd grid item */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Website</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="url"
                                placeholder="www. website. com"
                                value={contact_details.website}
                                onChange={(event) => handleContactDetailsChange(event, 'website')}
                                fullWidth
                                className={`${classes.InputStyling}`}
                            />
                            {(errorList?.contact_details?.website !== '') ? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.contact_details?.website}</FormHelperText> : ''}
                        </FormControl>
                    </Grid>



                    {/* 4th grid item */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Email Address</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="email"
                                placeholder="mail-id @ org.com"
                                value={contact_details.email}
                                onChange={(event) => handleContactDetailsChange(event, 'email')}
                                fullWidth
                                className={`${classes.InputStyling}`}
                            />
                            {(errorList?.contact_details?.email !== '') ? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.contact_details?.email}</FormHelperText> : ''}
                        </FormControl>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection5;
