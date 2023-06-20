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


const CreatePropertySection5 = ({ data, setData }) => {

    const classes = CreatePropertySection5Style();
    const { contact_details } = data;

    const handleContactDetailsChange = (event, element) => {
        setData(event, 'contact_details', element);
    };


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
                                placeholder="Business Phone"
                                value={contact_details.bphone}
                                onChange={(event) => handleContactDetailsChange(event, 'bphone')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', paddingLeft: '0', borderRadius: '4px' }}
                                className={classes.numberInput}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Select
                                            value={contact_details.ccode}
                                            onChange={(event) => handleContactDetailsChange(event, 'ccode')}
                                            style={{ minWidth: '60px', borderTop: 'none', borderLeft: 'none', borderBottom: 'none',}}
                                        >
                                            <MenuItem value="+1">+1</MenuItem>
                                            <MenuItem value="+91">+91</MenuItem>
                                            {/* Add more country code options */}
                                        </Select>
                                    </InputAdornment>
                                }

                            />
                        </FormControl>
                    </Grid>


                    {/* <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Landmark</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                placeholder="Landmark"
                                value={address_details.landmark}
                                onChange={(event) => handleAddressDetailsChange(event, 'landmark')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                            />
                        </FormControl>
                    </Grid>


                   
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Address line 1</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                placeholder="Address line 1"
                                value={address_details.aline1}
                                onChange={(event) => handleAddressDetailsChange(event, 'aline1')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}

                            />
                        </FormControl>
                    </Grid>


               
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Address line 2</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                placeholder="Address line 2"
                                value={address_details.aline2}
                                onChange={(event) => handleAddressDetailsChange(event, 'aline2')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}

                            />
                        </FormControl>
                    </Grid>
 */}



                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection5;
