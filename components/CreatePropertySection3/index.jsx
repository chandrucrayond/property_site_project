import { Typography, useMediaQuery, Grid, Button, TextField, Box, Divider } from "@mui/material";
import React from "react";
import { CreatePropertySection3Style } from "./style";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { Input } from '@mui/material';
import { InputBase } from '@mui/material';



const CreatePropertySection3 = () => {

    const classes = CreatePropertySection3Style();
    const [select1, setSelect1] = React.useState('Apartment');

    const handleChange1 = (event) => {
        setSelect1(event.target.value);
    };

    const [select2, setSelect2] = React.useState('Residential');

    const handleChange2 = (event) => {
        setSelect2(event.target.value);
    };

    const [select3, setSelect3] = React.useState('Daily');

    const handleChange3 = (event) => {
        setSelect3(event.target.value);
    };


    const [select4, setSelect4] = React.useState('Active');

    const handleChange4 = (event) => {
        setSelect4(event.target.value);
    };


    const [select5, setSelect5] = React.useState('');

    const handleChange5 = (event) => {
        setSelect5(event.target.value);
    };

    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h4' style={{ color: '#4E5A6B', marginBottom: '15px', }}>PROPERTY DETAILS</Typography>
            </Grid>
            <Grid item xs={12}  >
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Type</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={select1}
                                onChange={handleChange1}
                            >
                                <MenuItem value={'Apartment'}>Apartment</MenuItem>
                                <MenuItem value={'Individual house'}>Individual house</MenuItem>
                                <MenuItem value={'Plot'}>Plot</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Purpose</Typography>
                        <FormControl fullWidth>
                        <Select
                                value={select2}
                                onChange={handleChange2}
                            >
                                <MenuItem value={'Residential'}>Residential</MenuItem>
                                <MenuItem value={'Commercial'}>Commercial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>



                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Payment Period</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={select3}
                                onChange={handleChange3}
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
                                value={select4}
                                onChange={handleChange4}
                            >
                                <MenuItem value={'Active'}>Active</MenuItem>
                                <MenuItem value={'Inactive'}>Inactive</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>

                

                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection3;
