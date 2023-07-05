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
import { useContext } from 'react';
import { DataContext } from "../../Context";
import {FormHelperText} from "@mui/material";


const CreatePropertySection3 = ({ data, setData, mode, setFormData, handlePublicListChange, handlePetsAllowed }) => {

    const classes = CreatePropertySection3Style();
    const { property_details2 } = data;
    const { propertiesList, setPropertiesList, errorList, setErrorList } = useContext(DataContext);

    const handlePropertyDetailsChange = (event, element) => {
        setData(event, 'property_details2', element);
    };

    const [measure_unit, setMeasure_unit] = useState('Sq.ft');
    useEffect(() => {
        setMeasure_unit(property_details2.munit);
    }, [property_details2.munit]);


    const [selected, setSelected] = React.useState(property_details2.plist);

    const handleClick = (event, newSelected) => {
        setSelected(newSelected);
        console.log(newSelected);
        if (mode === "edit") {
            handlePublicListChange(newSelected);
        }
        else {
            setFormData((prevState) => ({
                ...prevState,
                property_details2: {
                    ...prevState.property_details2,
                    plist: newSelected,
                },
            }));
        }
    };


    const [selectedPets, setSelectedPets] = React.useState((mode === "edit") ? property_details2.pets : false);

    const handlePetsClick = (petSelected) => {
        console.log(petSelected);
        if (mode === "edit") {
            handlePetsAllowed(petSelected);
        }
        else {
            setFormData((prevState) => ({
                ...prevState,
                property_details2: {
                    ...prevState.property_details2,
                    pets: petSelected,
                },
            }));
        }
    };


    const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));
    return (
        <Grid container>
            <Grid item xs={12}  >
                <Grid container spacing={4}>


                    {/* 1st grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Type</Typography>
                        <FormControl fullWidth>
                            <InputLabel shrink={!property_details2.ptype} id="select-label" style={{ top: '20px' }} className={classes.inputLabel}>
                                {property_details2.ptype ? '' : 'Property Type'}
                            </InputLabel>
                            <Select
                                value={property_details2.ptype}
                                onChange={(event) => handlePropertyDetailsChange(event, 'ptype')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Apartment'}><Typography variant='h2'>Apartment</Typography></MenuItem>
                                <MenuItem value={'Individual house'}><Typography variant='h2'>Individual house</Typography></MenuItem>
                                <MenuItem value={'Plot'}><Typography variant='h2'>Plot</Typography></MenuItem>
                            </Select>
                            {property_details2?.ptype ? '': <FormHelperText className={classes.helperText}>{errorList?.property_details2?.ptype}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    {/* 2nd grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Purpose</Typography>
                        <FormControl fullWidth>
                            <InputLabel shrink={!property_details2.ppurp} id="select-label" style={{ top: '20px' }} className={classes.inputLabel}>
                                {property_details2.ppurp ? '' : 'Property Purpose'}
                            </InputLabel>
                            <Select
                                value={property_details2.ppurp}
                                onChange={(event) => handlePropertyDetailsChange(event, 'ppurp')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Residential'}><Typography variant='h2'>Residential</Typography></MenuItem>
                                <MenuItem value={'Commercial'}><Typography variant='h2'>Commercial</Typography></MenuItem>
                            </Select>
                            {property_details2?.ppurp ? '': <FormHelperText className={classes.helperText}>{errorList?.property_details2?.ppurp}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    {/* 3rd grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Revenue Type</Typography>
                        <FormControl fullWidth>
                            <InputLabel shrink={!property_details2.rtype} id="select-label" style={{ top: '20px' }} className={classes.inputLabel}>
                                {property_details2.rtype ? '' : 'Revenue Type'}
                            </InputLabel>
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
                            {property_details2?.rtype ? '': <FormHelperText className={classes.helperText}>{errorList?.property_details2?.rtype}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    {/* 4th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Measurement unit</Typography>
                        <FormControl fullWidth>
                            <InputLabel shrink={!property_details2.munit} id="select-label" style={{ top: '20px' }} className={classes.inputLabel}>
                                {property_details2.munit ? '' : 'Measurement unit'}
                            </InputLabel>
                            <Select
                                value={property_details2.munit}
                                onChange={(event) => handlePropertyDetailsChange(event, 'munit')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Sq.ft'}><Typography variant='h2'>Sq.ft</Typography></MenuItem>
                                <MenuItem value={'Sq.m'}><Typography variant='h2'>Sq.m</Typography></MenuItem>

                            </Select>
                            {property_details2?.munit ? '': <FormHelperText className={classes.helperText}>{errorList?.property_details2?.munit}</FormHelperText>}
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
                                onKeyDown={(event) => {
                                    if (event.key === 'e' || event.key === 'E') {
                                        event.preventDefault();
                                    }
                                }}
                                fullWidth
                                className={`${classes.InputStyling} ${classes.numberInput}`}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Typography variant='h2' style={{ color: '#98A0AC', }}>{measure_unit}</Typography>
                                    </InputAdornment>
                                }
                            />
                             {(errorList?.property_details2?.carea!=='')? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.property_details2?.carea}</FormHelperText> : ''}
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
                                onKeyDown={(event) => {
                                    if (event.key === 'e' || event.key === 'E') {
                                        event.preventDefault();
                                    }
                                }}
                                fullWidth
                                className={`${classes.InputStyling} ${classes.numberInput}`}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Typography variant='h2' style={{ color: '#98A0AC', }}>{measure_unit}</Typography>
                                    </InputAdornment>
                                }
                            />
                             {(errorList?.property_details2?.tarea!=='')? <FormHelperText className={`${classes.helperText} ${classes.inputHelperText}`}>{errorList?.property_details2?.tarea}</FormHelperText> : ''}
                        </FormControl>
                    </Grid>

                    {/* 7th grid item */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Year Built</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                type="date"
                                placeholder="01 /01 /2020"
                                value={property_details2.ybuilt}
                                onChange={(event) => handlePropertyDetailsChange(event, 'ybuilt')}
                                fullWidth
                                className={`${classes.InputStyling}`}
                                style={{ opacity: property_details2.ybuilt ? '1.0' : '0.6' }}
                            />
                             {property_details2?.ybuilt ? '': <FormHelperText className={classes.helperText}>{errorList?.property_details2?.ybuilt}</FormHelperText>}
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
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px', opacity: property_details2.hdate ? '1.0' : '0.6'  }}
                                className={`${classes.InputStyling}`}
                            />
                             {property_details2?.hdate ? '': <FormHelperText className={classes.helperText}>{errorList?.property_details2?.hdate}</FormHelperText>}
                        </FormControl>
                    </Grid>


                    {/* 9th grid item value not added in data */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Public Listing</Typography>
                        <ToggleButtonGroup
                            value={selected}
                            style={{ opacity: property_details2.plist ? '1.0' : '0.6' }}
                        >
                            <ToggleButton
                                value="Private"
                                // selected={selected === "Private"}
                                onClick={(event) => handleClick(event, "Private")}
                                color="primary"
                                style={{
                                    ...(selected === "Private" && { backgroundColor: "#5078E1", border: 'none' }),
                                }}
                                className={classes.toggleButtonListing}
                            >
                                <Typography variant='h2' style={{ ...(selected === "Private" && { color: 'white' }) }}>Private</Typography>
                            </ToggleButton>
                            <ToggleButton
                                value="Public"
                                // selected={selected === "Public"}
                                onClick={(event) => handleClick(event, "Public")}
                                color="primary"
                                style={{
                                    ...(selected === "Public" && { backgroundColor: "#5078E1", border: 'none !important' }),
                                }}
                                className={classes.toggleButtonListing}
                            >
                                <Typography variant='h2' style={{ ...(selected === "Public" && { color: 'white' }) }}>Public</Typography>
                            </ToggleButton>
                            <ToggleButton
                                value="None"
                                // selected={selected === "None"}
                                onClick={(event) => handleClick(event, "None")}
                                color="primary"
                                style={{
                                    ...(selected === "None" && { backgroundColor: "#5078E1", border: 'none' }),
                                }}
                                className={classes.toggleButtonListing}
                            >
                                <Typography variant='h2' style={{ ...(selected === "None" && { color: 'white' }) }}>None</Typography>
                            </ToggleButton>
                          
                        </ToggleButtonGroup>
                        {property_details2?.plist ? '': <FormHelperText className={`${classes.helperText} ${classes.listingHelperText}`}>{errorList?.property_details2?.plist}</FormHelperText>}
                       
                    </Grid>


                    {/* 10th grid item value not added in data */}
                    <Grid item xs={12} sm={6} md={2} style={{ ...(isLgScreen && { position: 'relative', right: '50px', }), }}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Pets Allowed</Typography>

                        <ToggleButton
                            value={selectedPets}
                            selected={selectedPets}
                            onChange={() => {
                                setSelectedPets(!selectedPets);
                                handlePetsClick(!selectedPets);
                            }}
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
