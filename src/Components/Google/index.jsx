import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Fab, Popover, Collapse, Fade, Slide } from '@mui/material';
import AppHeader from '../AppHeader';
import FilterSection from '../FilterSection';
import FooterSection from '../Footer/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ProductListingPage from '../ProductListingPage';
import { jsonData } from '../ProductsJson';

function SharedLayout() {
  const productArray = jsonData;
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMdScreen = useMediaQuery(() => theme.breakpoints.down('lg'));


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
    propperty_detaild: {
      name: "",
      gender: ""
    },
    address_details:{
      lng:"",
      lat:""
    }
    // data: [
    //   {
    //     name: "Phones",
    //     value: false,
    //     key: "phone"
    //   },
    //   {
    //     name: "Headphones",
    //     value: false,
    //     key: "headphone"
    //   },
    //   {
    //     name: "Accessories",
    //     value: false,
    //     key: "accessories"
    //   },
    // ]
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
    <Container>
      <AppHeader />

      <div sx={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>

        <Container sx={{ flexGrow: 1, minHeight: '70vh', mt: 14, mb: 10 }}>
          <Grid container spacing={5}>

            {isMdScreen ? (
              <>
                <Fab size="small" color="primary" sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
                  onClick={handleClick}>
                  <TuneIcon />
                </Fab>
                <Popover
                  id={"simple-popover"}
                  open={open}
                  onClose={handleClose}
                  anchorReference="anchorPosition"
                  anchorPosition={anchorPosition}
                >
                  <FilterSection ref={filterSectionRef}
                    filterData={filterData} handleCheckboxChange={handleCheckboxChange}
                    handleCheckboxChangeAll={handleCheckboxChangeAll} selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
                </Popover>
              </>
            ) : (
              <Grid item lg={3} >
                <FilterSection filterData={filterData} handleCheckboxChange={handleCheckboxChange}
                  handleCheckboxChangeAll={handleCheckboxChangeAll} selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory} />
              </Grid>
            )}

            <Grid item lg={9} xs={12}>
              <ProductListingPage productArray={productArrayData} />
            </Grid>
          </Grid>
        </Container>

      </div >
      <FooterSection />
      <br />


    </Container >
  );
}

export default SharedLayout;
