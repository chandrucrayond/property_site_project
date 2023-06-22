import { AppBar, Card, Grid, IconButton, Typography, } from "@mui/material";
import React, { useState } from "react";
import { ViewProperties_Section3_Pagination_Style } from "./style";

const ViewProperties_Section3_Pagination = () => {
  const classes = ViewProperties_Section3_Pagination_Style();

  return (
    <Grid container spacing={1}>

      {/* Page  section */}

          <Grid item>
                <Typography variant='h3'>Page 1/1</Typography>
          </Grid>


          <Grid item xs={2} style={{display: 'flex', justifyContent: 'end',}}>
            
          </Grid>

    </Grid>
  );
};

export default ViewProperties_Section3_Pagination;
