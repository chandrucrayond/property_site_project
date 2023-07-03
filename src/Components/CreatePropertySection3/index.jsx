import { Typography, useMediaQuery, Grid, Button, TextField, Box, Divider, InputAdornment, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CreatePropertySection3Style } from "./style";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { Input } from '@mui/material';
import { InputBase } from '@mui/material';
import { ToggleButton, ToggleButtonGroup, } from '@mui/material';
import theme from "../ThemeProvider";
import TickMark from "../../icons/Create-Property/TickMark";


const CreatePropertySection3 = ({ data, setData }) => {

    const classes = CreatePropertySection3Style();
    const { property_details2 } = data;

    const handlePropertyDetailsChange = (event, element) => {
        setData(event, 'property_details2', element);
    };

    const [measure_unit, setMeasure_unit] = useState('Sq.ft');
    useEffect(() => {
        setMeasure_unit(property_details2.munit);
    }, [property_details2.munit]);


    const [selected, setSelected] = React.useState(1);

    const [selectedPets, setSelectedPets] = React.useState("false");
    const handleClick = (value) => {
        if (selected === value) {
            setSelected(null);
        } else {
            setSelected(value);
        }
    };

    const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
    return (
        <Grid container>
            <Grid item xs={12}  >
                <Grid container spacing={3}>


                    {/* 1st grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Type</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details2.ptype}
                                onChange={(event) => handlePropertyDetailsChange(event, 'ptype')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Apartment'}><Typography variant='h2'>Apartment</Typography></MenuItem>
                                <MenuItem value={'Individual house'}><Typography variant='h2'>Individual house</Typography></MenuItem>
                                <MenuItem value={'Plot'}><Typography variant='h2'>Plot</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    {/* 2nd grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Purpose</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details2.ppurp}
                                onChange={(event) => handlePropertyDetailsChange(event, 'ppurp')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Residential'}><Typography variant='h2'>Residential</Typography></MenuItem>
                                <MenuItem value={'Commercial'}><Typography variant='h2'>Commercial</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    {/* 3rd grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Revenue Type</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details2.rtype}
                                onChange={(event) => {
                                    handlePropertyDetailsChange(event, 'rtype')
                                }}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Lease'}><Typography variant='h2'>Lease</Typography></MenuItem>
                                <MenuItem value={'Rent'}><Typography variant='h2'>Rent</Typography></MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>


                    {/* 4th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Measurement unit</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details2.munit}
                                onChange={(event) => handlePropertyDetailsChange(event, 'munit')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Sq.ft'}><Typography variant='h2'>Sq.ft</Typography></MenuItem>
                                <MenuItem value={'Sq.m'}><Typography variant='h2'>Sq.m</Typography></MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>


                    {/* 5th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Carpet Area</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="number"
                                placeholder="Carpet Area"
                                value={property_details2.carea}
                                onChange={(event) => handlePropertyDetailsChange(event, 'carea')}
                                fullWidth
                                className={`${classes.InputStyling} ${classes.numberInput}`}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Typography variant='h2' style={{color: '#98A0AC',}}>{measure_unit}</Typography>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>


                    {/* 6th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Total Area</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="number"
                                placeholder="Total Area"
                                value={property_details2.tarea}
                                onChange={(event) => handlePropertyDetailsChange(event, 'tarea')}
                                fullWidth
                                className={`${classes.InputStyling} ${classes.numberInput}`}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Typography variant='h2' style={{color: '#98A0AC',}}>{measure_unit}</Typography>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>


                    {/* 7th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Year Built</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="date"
                                value={property_details2.ybuilt}
                                onChange={(event) => handlePropertyDetailsChange(event, 'ybuilt')}
                                fullWidth
                                className={`${classes.InputStyling}`}
                            />
                        </FormControl>
                    </Grid>



                    {/* 8th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Handover Date</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="date"
                                value={property_details2.hdate}
                                onChange={(event) => handlePropertyDetailsChange(event, 'hdate')}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                                className={`${classes.InputStyling}`}
                            />
                        </FormControl>
                    </Grid>


                    {/* 9th grid item value not added in data */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Public Listing</Typography>
                        <ToggleButton
                            value="check"
                            selected={selected === 1}
                            onClick={() => handleClick(1)}
                            color="primary"
                            style={{
                                ...(selected === 1 && { backgroundColor: "#5078E1", border: 'none', }),

                            }}
                            className={classes.toggleButtonListing}
                        >
                            <Typography variant='h2' style={{ ...(selected === 1 && { color: 'white' }), }}>Private</Typography>
                        </ToggleButton>
                        <ToggleButton
                            value="check"
                            selected={selected === 2}
                            onClick={() => handleClick(2)}
                            color="primary"
                            style={{
                                ...(selected === 2 && { backgroundColor: "#5078E1", border: 'none !important', }),
                            }}
                            className={classes.toggleButtonListing}
                        >
                            <Typography variant='h2' style={{ ...(selected === 2 && { color: 'white' }), }}>Public</Typography>
                        </ToggleButton>
                        <ToggleButton
                            value="check"
                            selected={selected === 3}
                            onClick={() => handleClick(3)}
                            color="primary"
                            style={{
                                // height: '50%',
                                // textTransform: 'none',
                                ...(selected === 3 && { backgroundColor: "#5078E1", border: 'none', }),
                                // borderRadius: '10px',
                            }}
                            className={classes.toggleButtonListing}
                        >
                            <Typography variant='h2' style={{ ...(selected === 3 && { color: 'white' }), }}>None</Typography>
                        </ToggleButton>
                    </Grid>


                    {/* 10th grid item value not added in data */}
                    <Grid item xs={12} sm={6} md={2} style={{ ...(isLgScreen && { position: 'relative', right: '50px', }), }}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Pets Allowed</Typography>
                        <ToggleButton
                            value="check"
                            selected={selectedPets}
                            onClick={() => { setSelectedPets(!selectedPets); }}
                            color="primary"
                            style={{
                                marginRight: '10px',
                                textTransform: 'none',
                                ...(selectedPets && { backgroundColor: "#5078E1" }),
                                borderRadius: '50%',
                                height: '1px',
                                width: '1px',
                                color: '#98A0AC',
                                position: 'relative',
                                top: '5px',
                            }}

                        >
                            <TickMark style={selectedPets && { color: '#FFFFFF' }} />
                        </ToggleButton>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection3;
