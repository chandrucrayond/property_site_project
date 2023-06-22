import { AppBar, Card, Grid, IconButton, Typography, useMediaQuery, Button, Snackbar, Alert, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { ViewProperties_Section1_SearchFilter_Style } from "./style";
import FormControl from '@mui/material/FormControl';
import { InputBase } from '@mui/material';
import FilterIcon from "../../src/icons/View-Properties/FilterIcon";
import FilterIconNotified from "../../src/icons/View-Properties/FilterIconNotified";
import SearchIcon from "../../src/icons/View-Properties/SearchIcon";

const ViewProperties_Section1_SearchFilter = () => {
  const classes = ViewProperties_Section1_SearchFilter_Style();

  return (
    <Grid container spacing={1}>

      {/* Search and filter section */}


          <Grid item xs={10}>
            <FormControl fullWidth>
              <InputBase
                placeholder="Search Properties"
                // value={property_details2.carea}
                // onChange={(event) => handlePropertyDetailsChange(event, 'carea')}
                fullWidth
                className={classes.filterBox}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>


          <Grid item xs={2} style={{display: 'flex', justifyContent: 'end',}}>
            <FilterIconNotified />
          </Grid>

    </Grid>
  );
};

export default ViewProperties_Section1_SearchFilter;
