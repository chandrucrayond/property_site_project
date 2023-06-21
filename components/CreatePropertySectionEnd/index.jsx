import { Typography, useMediaQuery, Grid, Button, AppBar, Toolbar } from "@mui/material";
import React from "react";
import { CreatePropertySectionEndStyle } from "./style";


const CreatePropertySectionEnd = ({ data, setData }) => {

    const classes = CreatePropertySectionEndStyle();


    return (
        <Grid container >
             <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 , backgroundColor: '#FFFFFF',}}>
               
                <Toolbar style={{display: 'flex', justifyContent: 'end',}}>
                   
                    <Grid item xs={12} sm={6} md={1}  style={{display: 'flex', justifyContent: 'center',}}>                
                            <Button style={{color: '#091B29', backgroundColor: '#FFFFFF', border: '1px solid #E4E8EE', padding: '8px', textTransform: 'none', borderRadius: '8px', width: '80%', }}>Cancel</Button>
                   </Grid>
                  
                   <Grid item xs={12} sm={6} md={1}  style={{display: 'flex', justifyContent: 'center',}}>    
                   <Button style={{color: 'white', backgroundColor:'#5078E1',  padding: '8px', textTransform: 'none',  borderRadius: '8px', width: '80%',}}>Create</Button>
                   </Grid>
                 
                   </Toolbar>

            </AppBar>
        </Grid>
    );
};

export default CreatePropertySectionEnd;
