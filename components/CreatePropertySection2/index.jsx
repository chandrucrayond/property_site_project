import { Typography, useMediaQuery, Grid, Button } from "@mui/material";
import React from "react";
import { CreatePropertySection2Style } from "./style";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const CreatePropertySection2 = () => {

    const classes = CreatePropertySection2Style();
    const [select1, setSelect1] = React.useState('Company Name');

    const handleChange1 = (event) => {
        setSelect1(event.target.value);
    };
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.subContainer}>
                <Typography variant='h4' style={{ color: '#4E5A6B', marginBottom: '15px', }}>PROPERTY DETAILS</Typography>
            </Grid>
            <Grid item xs={12} className={classes.subContainer} >
                <Grid container spacing={3}>

                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Company Name</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={select1}
                                onChange={handleChange1}
                            >
                                <MenuItem value={'Company Name'}>Company Name</MenuItem>
                                <MenuItem value={'Organization Name'}>Organization Name</MenuItem>
                                <MenuItem value={'Retail Name'}>Retail Name</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Name</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={select1}
                                onChange={handleChange1}
                            >
                                <MenuItem value={'Company Name'}>Company Name</MenuItem>
                                <MenuItem value={'Organization Name'}>Organization Name</MenuItem>
                                <MenuItem value={'Retail Name'}>Retail Name</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection2;
