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
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const CreatePropertySection2 = ({ data, setData }) => {
    const classes = CreatePropertySection2Style();
    const { property_details } = data;

      const handlePropertyDetailsChange = (event, element) => {
          setData(event, "property_details", element);
      };

    // const handlePropertyDetailsChange = (event, element) => {
    //     if (element === "pdesc") {
    //         setData({ ...property_details, pdesc: quillValue });
    //     } else {
    //         setData({ ...property_details, [element]: event.target.value });
    //     }
    // };


    // const toolbarOptions = {
    //     toolbar: [
    //         ['bold', 'italic', 'underline', 'strike'],
    //         [{ list: 'ordered' }, { list: 'bullet' }]
    //     ]
    // };

    // const [quillValue, quillSetValue] = React.useState('');

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h4' style={{ color: '#4E5A6B', marginBottom: '15px', }}>PROPERTY DETAILS</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    
                    
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Company Name</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details.cname}
                                onChange={(event) => handlePropertyDetailsChange(event, 'cname')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Company Name'}><Typography variant="h2">Company Name</Typography></MenuItem>
                                <MenuItem value={'Organization Name'}><Typography variant="h2">Organization Name</Typography></MenuItem>
                                <MenuItem value={'Retail Name'}><Typography variant="h2">Retail Name</Typography></MenuItem>
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
                                className={`${classes.InputStyling}`}
                            />
                        </FormControl>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Payment Period</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details.pperiod}
                                onChange={(event) => handlePropertyDetailsChange(event, 'pperiod')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Daily'}><Typography variant="h2">Daily</Typography></MenuItem>
                                <MenuItem value={'Monthly'}><Typography variant="h2">Monthly</Typography></MenuItem>
                                <MenuItem value={'Yearly'}><Typography variant="h2">Yearly</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Status</Typography>
                        <FormControl fullWidth>
                            <Select
                                value={property_details.status}
                                onChange={(event) => handlePropertyDetailsChange(event, 'status')}
                                className={`${classes.SelectStyling}`}
                            >
                                <MenuItem value={'Active'}><Typography variant="h2">Active</Typography></MenuItem>
                                <MenuItem value={'Inactive'}><Typography variant="h2">Inactive</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    
                    {/* <Grid item xs={12}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Description</Typography>
                        <div className={classes.quillContainer}>
                            <ReactQuill
                                theme="snow"
                                value={quillValue}
                                onChange={quillSetValue}
                                modules={toolbarOptions}
                            />
                        </div>
                    </Grid> */}


                </Grid>
            </Grid>
        </Grid>
    );
};

export default CreatePropertySection2;
