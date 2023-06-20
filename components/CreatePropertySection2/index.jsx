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



const CreatePropertySection2 = () => {

    const classes = CreatePropertySection2Style();
    const [select1, setSelect1] = React.useState('Company Name');

    const handleChange1 = (event) => {
        setSelect1(event.target.value);
    };

    const [select2, setSelect2] = React.useState('');

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


                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Name</Typography>
                        <FormControl fullWidth>
                            <InputBase
                                placeholder="Property Name"
                                value={select2}
                                onChange={handleChange2}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', height: '55px', padding: '15px', borderRadius: '4px' }}
                            />
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

                    <Grid item xs={12} >
                        <Typography variant='h5' style={{ marginBottom: '10px', }}>Property Description</Typography>
                        {/* <FormControl fullWidth >
                            <textarea
                                placeholder="Enter your text"
                                value={select5}
                                onChange={handleChange5}
                                fullWidth
                                style={{ border: '1px solid #bdbdbd', borderBottom: 'none', height: '50px' , flexWrap: 'wrap',  padding: '15px', marginBottom: '5px', borderRadius: '4px', resize: 'none', borderBottomLeftRadius: 'inherit',borderBottomRightRadius: 'inherit', }}
                                className={classes.textarea}
                           />
                         <Grid container columnGap={2}  alignItems={"center"} style={{border: '1px solid #bdbdbd',position: 'relative', bottom: '9px',  width: '100%',borderRadius: '4px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', }}>
                           <Grid item style={{cursor: 'pointer'}}><Bold /></Grid> 
                           <Grid item style={{cursor: 'pointer'}}><Italic /></Grid> 
                           <Grid item style={{cursor: 'pointer'}}><Underline /></Grid> 
                           <Grid item style={{cursor: 'pointer'}}><Strike /></Grid> 
                           <Grid item><Divider orientation="vertical" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: '15px', padding: '0'   }} /></Grid>
                            <Grid item style={{cursor: 'pointer'}}><Numbered /></Grid>
                            <Grid item style={{cursor: 'pointer'}}><Bullet /></Grid>

                         </Grid>
                        </FormControl> */}
                        <CreatePropertyQuill />
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    );
};

export default CreatePropertySection2;
