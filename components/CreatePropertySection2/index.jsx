import { Typography, useMediaQuery, Grid, Button, TextField, Box, Divider } from "@mui/material";
import React from "react";
import { CreatePropertySection2Style } from "./style";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { Input } from '@mui/material';
import { InputBase } from '@mui/material';
import CreatePropertyQuill from "../CreatePropertyQuill/index";



const CreatePropertySection2 = ({ data, setData }) => {

    const classes = CreatePropertySection2Style();
    const { property_details } = data;

    const handlePropertyDetailsChange = (event, element) => {
        setData(event, 'property_details', element);
    };


    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h4' style={{ color: '#4E5A6B', marginBottom: '15px', }}>PROPERTY DETAILS</Typography>
            </Grid>
            <Grid item xs={12}  >
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Company Name</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details.cname}
                                onChange={(event) => handlePropertyDetailsChange(event, 'cname')}
                            >
                                <MenuItem value={'Company Name'}>Company Name</MenuItem>
                                <MenuItem value={'Organization Name'}>Organization Name</MenuItem>
                                <MenuItem value={'Retail Name'}>Retail Name</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Name</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                placeholder="Property Name"
                                value={property_details.pname}
                                onChange={(event) => handlePropertyDetailsChange(event, 'pname')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                            />
                        </FormControl>
                    </Grid>



                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Payment Period</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details.pperiod}
                                onChange={(event) => handlePropertyDetailsChange(event, 'pperiod')}
                            >
                                <MenuItem value={'Daily'}>Daily</MenuItem>
                                <MenuItem value={'Monthly'}>Monthly</MenuItem>
                                <MenuItem value={'Yearly'}>Yearly</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>



                    <Grid item xs={12} sm={6}  md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Status</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details.status}
                                onChange={(event) => handlePropertyDetailsChange(event, 'status')}
                            >
                                <MenuItem value={'Active'}>Active</MenuItem>
                                <MenuItem value={'Inactive'}>Inactive</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} >
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Description</Typography>
                      
                        <CreatePropertyQuill 
                        value={property_details.pdesc}
                        setValue={handlePropertyDetailsChange}
                        />
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection2;
