import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Fab, Popover, Collapse, Fade, Slide } from '@mui/material';
import AppHeader from '../AppHeader';
// import FilterSection from '../FilterSection';
// import FooterSection from '../Footer/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import PropsListingPage from '../Dashboard';
import { jsonData } from '../Json';
import { SharedLayoutStyle } from "./style";
import theme from "../ThemeProvider/index.jsx";
import SideBar from "../SideBar/index.jsx";

function SharedLayout() {
  const productArray = jsonData;

  const isMdScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const classes = SharedLayoutStyle();

  const [open, setOpen] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 });
  const filterSectionRef = useRef(null);

  const handleClick = (event) => {
    setOpen(!open);
    setAnchorPosition({ top: event.clientY, left: event.clientX });
  };

  const handleClose = () => {
    setOpen(false);
  };

  //filter section checkbox state to be managed area

  const [isAllChecked, setIsAllChecked] = useState(false);

  const [filterData, setFilterData] = useState({
    data: [
      {
        name: "Phones",
        value: false,
        key: "phone"
      },
      {
        name: "Headphones",
        value: false,
        key: "headphone"
      },
      {
        name: "Accessories",
        value: false,
        key: "accessories"
      },
    ]
  })

  const handleCheckboxChange = (v, i) => {
    filterData.data[i].value = v;
    setFilterData({ ...filterData });

    if (v === false) {
      setIsAllChecked(false);
    } else {
      const allUnchecked = filterData.data.some((item, index) => index !== i && !item.value);
      setIsAllChecked(!allUnchecked);
    }
  };

  const handleCheckboxChangeAll = (v, i) => {
    var newData = filterData.data.map(v => { return { ...v, value: !isAllChecked } })
    setFilterData({ data: newData });
    setIsAllChecked(!isAllChecked);
  };

  const [selectedCategory, setSelectedCategory] = useState('all');

  const productArrayData = filterData?.data?.some(c => c.value)
    ? productArray.filter(v => filterData.data.some(c => c.key === v.section && c.value))
    : productArray;


  return (

    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} className={classes.Style}>
            <AppHeader />
          </Grid>
          <Grid item xs={12} >
            <Grid container >

              {/* <Grid item className={classes.sideBarStyle}>
                <SideBar />
              </Grid> */}

              <Grid item xs={12} className={classes.outletStyle} >
                <Outlet />
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </div>
    </ThemeProvider>

  );
}

export default SharedLayout;
