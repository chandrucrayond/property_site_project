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
                                            value={contact_details.stdcode}
                                            onChange={(event) => handleContactDetailsChange(event, 'stdcode')}
                                            style={{ minWidth: '60px', border: 'none'}}
                                        >
                                            <MenuItem value="044">044</MenuItem>
                                            <MenuItem value="043">043</MenuItem>
                                            <MenuItem value="042">042</MenuItem>
                                            <MenuItem value="001">001</MenuItem>
                                            {/* Add more country code options */}
                                        </Select>
                                        <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '25px', }} />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>


                   {/* 2nd grid item */}
                   <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Mobile Phone</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="number"
                                placeholder="Mobile Phone"
                                value={contact_details.mphone}
                                onChange={(event) => handleContactDetailsChange(event, 'mphone')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', paddingLeft: '0', borderRadius: '4px' }}
                                className={classes.numberInput}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Select
                                            value={contact_details.ccode}
                                            onChange={(event) => handleContactDetailsChange(event, 'ccode')}
                                            style={{ minWidth: '60px', border: 'none'}}
                                        >
                                            <MenuItem value="+91">+91</MenuItem>
                                            <MenuItem value="+02">+02</MenuItem>
                                            <MenuItem value="+35">+35</MenuItem>
                                            {/* Add more country code options */}
                                        </Select>
                                        <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '25px', }} />
                                    </InputAdornment>
                                }

                            />
                        </FormControl>
                    </Grid>


                      {/* 3rd grid item */}
                   <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Website</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type= "url"
                                placeholder="WWW.Business-Website.com"
                                value={contact_details.website}
                                onChange={(event) => handleContactDetailsChange(event, 'website')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                            />
                        </FormControl>
                    </Grid>


                    
                      {/* 4th grid item */}
                   <Grid item xs={12} sm={6} md={4}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Email Address</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type= "email"
                                placeholder="org@Business-Website.com"
                                value={contact_details.email}
                                onChange={(event) => handleContactDetailsChange(event, 'email')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                            />
                        </FormControl>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection5;
