import { Typography, useMediaQuery, Grid, Button, TextField, Box, Divider, InputAdornment } from "@mui/material";
import React from "react";
import { CreatePropertySection4Style } from "./style";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import { Input } from '@mui/material';
import { InputBase } from '@mui/material';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Loader } from '@googlemaps/js-api-loader';

 const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 12.949060, lng: 80.254333 }}
    >
         {props.isMarkerShown && <Marker position={{ lat: 12.949060, lng: 80.254333 }} />}
    </GoogleMap>
));


const CreatePropertySection4 = ({ data, setData }) => {

    const classes = CreatePropertySection4Style();
    const { address_details } = data;

    const handleAddressDetailsChange = (event, element) => {
        setData(event, 'address_details', element);
    };


    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h4' style={{ color: '#4E5A6B', marginBottom: '15px', }}>ADDRESS</Typography>
            </Grid>
            <Grid item xs={12}  >
                <Grid container spacing={2}>

                    {/* 1st grid item */}
                    <Grid item xs={12} sm={6} md={5}>
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9YkaEhzqTBfhFWKDNs1QXjQtTiFSkUJ4&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%`, borderRadius:'10px'}} />}
                            containerElement={<div style={{ height: `230px`, borderRadius:'10px' }} />}
                            mapElement={<div style={{ height: `100%`, borderRadius:'10px' }} />}
                            onLoad={props => {
                                // Perform any necessary actions after the Google Maps API is loaded
                                console.log('Google Maps API loaded:', props);
                              }}
                        />
                    </Grid>


                    <Grid item xs={12} sm={6} md={7}>
                        <Grid container spacing={2}>
                            {/* 2nd grid item */}
                            <Grid item xs={12} sm={6} md={2}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Door No.</Typography>
                                <FormControl fullWidth>
                                    <InputBase
                                        type="number"
                                        placeholder="Door No"
                                        value={address_details.dno}
                                        onChange={(event) => handleAddressDetailsChange(event, 'dno')}
                                        fullWidth
                                        className={`${classes.InputStyling} ${classes.numberInput}`}
                                    />
                                </FormControl>
                            </Grid>

                            {/* 3rd grid item */}
                            <Grid item xs={12} sm={6} md={5}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Address line 1</Typography>
                                <FormControl fullWidth>
                                    <InputBase
                                        placeholder="Address line 1"
                                        value={address_details.aline1}
                                        onChange={(event) => handleAddressDetailsChange(event, 'aline1')}
                                        fullWidth
                                        className={`${classes.InputStyling}`}

                                    />
                                </FormControl>
                            </Grid>


                            {/* 4th grid item */}
                            <Grid item xs={12} sm={6} md={5}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Address line 2</Typography>
                                <FormControl fullWidth>
                                    <InputBase
                                        placeholder="Address line 2"
                                        value={address_details.aline2}
                                        onChange={(event) => handleAddressDetailsChange(event, 'aline2')}
                                        fullWidth
                                        className={`${classes.InputStyling}`}
                                    />
                                </FormControl>
                            </Grid>


                            {/* 5th grid item */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Landmark</Typography>
                                <FormControl fullWidth>
                                    <InputBase
                                        placeholder="Landmark"
                                        value={address_details.landmark}
                                        onChange={(event) => handleAddressDetailsChange(event, 'landmark')}
                                        fullWidth
                                        className={`${classes.InputStyling}`}
                                   />
                                </FormControl>
                            </Grid>


                            {/* 6th grid item */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Area</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        value={address_details.area}
                                        onChange={(event) => handleAddressDetailsChange(event, 'area')}
                                        className={`${classes.SelectStyling}`}
                                    >
                                        <MenuItem value={'Pallavaram'}><Typography variant='h2'>Pallavaram</Typography></MenuItem>
                                        <MenuItem value={'Neelankarai'}><Typography variant='h2'>Neelankarai</Typography></MenuItem>
                                        <MenuItem value={'Adyar'}><Typography variant='h2'>Adyar</Typography></MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>



                               {/* 7th grid item */}
                               <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>City</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        value={address_details.city}
                                        onChange={(event) => handleAddressDetailsChange(event, 'city')}
                                        className={`${classes.SelectStyling}`}
                                    >
                                        <MenuItem value={'Chennai'}><Typography variant='h2'>Chennai</Typography></MenuItem>
                                        <MenuItem value={'Kanchipuram'}><Typography variant='h2'>Kanchipuram</Typography></MenuItem>
                                        <MenuItem value={'Kanyakumari'}><Typography variant='h2'>Kanyakumari</Typography></MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>



                             {/* 8th grid item */}
                             <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>State</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        value={address_details.state}
                                        onChange={(event) => handleAddressDetailsChange(event, 'state')}
                                        className={`${classes.SelectStyling}`}
                                    >
                                        <MenuItem value={'Tamilnadu'}><Typography variant='h2'>Tamilnadu</Typography></MenuItem>
                                        <MenuItem value={'Kerala'}><Typography variant='h2'>Kerala</Typography></MenuItem>
                                        <MenuItem value={'AdKarnatakayar'}><Typography variant='h2'>Karnataka</Typography></MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>


                             {/* 9th grid item */}
                             <Grid item xs={12} sm={6} md={3}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Country</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        value={address_details.country}
                                        onChange={(event) => handleAddressDetailsChange(event, 'country')}
                                        className={`${classes.SelectStyling}`}
                                    >
                                        <MenuItem value={'India'}><Typography variant='h2'>India</Typography></MenuItem>
                                        <MenuItem value={'USA'}><Typography variant='h2'>USA</Typography></MenuItem>
                                        <MenuItem value={'Poland'}><Typography variant='h2'>Poland</Typography></MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>


                             {/* 10th grid item */}
                             <Grid item xs={12} sm={6} md={2}>
                                <Typography variant='h5' style={{ marginBottom: '10px', }}>Pincode</Typography>
                                <FormControl fullWidth>
                                    <InputBase
                                        type="number"
                                        placeholder="Pincode"
                                        value={address_details.pincode}
                                        onChange={(event) => handleAddressDetailsChange(event, 'pincode')}
                                        fullWidth
                                        style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                                        className={`${classes.InputStyling} ${classes.numberInput}`}
                                    />
                                </FormControl>
                            </Grid>


                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection4;
