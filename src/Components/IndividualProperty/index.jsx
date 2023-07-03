import React from "react";
import { DataContext } from "../../Context";
import { IndividualProperty_Style } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import { AppBar, Box, Divider, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import { IndividualCard, NormalCard } from "../CreateCard";
import AddressIcon from "../../icons/Individual-Property/AddressIcon";
import PhoneIcon from "../../icons/Individual-Property/PhoneIcon";
import MapLocated from "../../icons/Individual-Property/MapLocated";
import Coordinate from "../../icons/Individual-Property/Coordinate";
import PropImage from "../../icons/Individual-Property/PropImage";
import theme from "../ThemeProvider/index.jsx";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import parse from 'html-react-parser';

export default function IndividualProperty() {
    const classes = IndividualProperty_Style();
    const { propertiesList, setPropertiesList } = React.useContext(DataContext);
    const [property, setProperty] = React.useState(null);
    let { propertyId } = useParams();

    React.useEffect(() => {
        if (propertiesList.length > 0) {
            const property = propertiesList[propertyId];
            setProperty(property);
        }
    }, [propertyId, propertiesList]);
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));

    let navigate = useNavigate();
    function handleClickingToggle() {
        navigate("/viewProperties");
    }



    return (
        <>
            <AppBar className={`${classes.appBar} ${isMdScreen ? classes.appBarTablet : ''} ${isSmScreen ? classes.appBarMobile : ''}`}>
                <IconButton className={classes.toggleIcon} onClick={handleClickingToggle}> <ChevronLeftIcon /></IconButton> <Typography variant="h2" color={"black"} className={classes.togglePara}>{property?.property_details?.pname}</Typography>
            </AppBar>

            {property && (
                <Grid container spacing={2} style={{ marginTop: isMdScreen ? '10px' : '20px', marginBottom: '10px' }} >

                    {/* first section of the page */}
                    <Grid item xs={12}>
                        <NormalCard>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={1.75} className={classes.ImageSection}>
                                    {/* <PropImage /> */}
                                    {property.property_details?.image ? (<img
                                        src={property.property_details.image}
                                        alt="Uploaded"
                                        width={120}
                                        height={120}
                                        style={{
                                            borderRadius: "50%",
                                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                                        }}
                                    />) : (<PropImage />)}
                                    <Box ><Typography variant="h5" className={classes.IdSection} >ID-PG2PRP{propertyId}</Typography></Box>
                                </Grid>

                                <Grid item xs={12} md={0.25} className={`${classes.dividerContainer}`}>
                                    {isMdScreen ? <Divider className={`${classes.dividerSmallScreen}`} /> : <Divider orientation="vertical" variant="middle" className={`${classes.divider}`} flexItem />}
                                </Grid>

                                <Grid item xs={12} md={10}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <Typography variant='h3' className={classes.propDetailsHeading}>PROPERTY DETAILS</Typography>
                                        </Grid>

                                        <Grid item xs={6} md={2}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Company Name</Typography>
                                            <Typography variant='h2'>{property.property_details?.cname}</Typography>
                                        </Grid>

                                        <Grid item xs={6} md={2}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Property Name</Typography>
                                            <Typography variant='h2'>{property.property_details?.pname}</Typography>
                                        </Grid>

                                        <Grid item xs={6} md={2}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Property Type</Typography>
                                            <Typography variant='h2'>{property.property_details2?.ptype}</Typography>
                                        </Grid>


                                        <Grid item xs={6} md={2}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Property Purpose</Typography>
                                            <Typography variant='h2'>{property.property_details2?.ppurp}</Typography>
                                        </Grid>

                                        <Grid item xs={6} md={2}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Payment Period</Typography>
                                            <Typography variant='h2'>{property.property_details?.pperiod}</Typography>
                                        </Grid>

                                        <Grid item xs={6} md={2}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Status</Typography>
                                            <Typography variant='h2'>{property.property_details?.status}</Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant='h5' className={classes.propDetailsSubHeading}>Property Description</Typography>
                                            <Typography variant='h2' className={classes.propDescription}>
                                                {parse(`${property.property_details.pdesc}`)}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </NormalCard>
                    </Grid>



                    {/* second section of the page */}
                    <Grid item xs={12}>
                        <NormalCard>
                            <Grid container spacing={2}>

                                <Grid item xs={6} md={1.714}>
                                    <Typography variant='h5' className={classes.propDetailsSubHeading}>Revenue Type</Typography>
                                    <Typography variant='h2'>{property.property_details2?.rtype}</Typography>
                                </Grid>

                                <Grid item xs={6} md={1.714}>
                                    <Typography variant='h5' className={classes.propDetailsSubHeading}>Carpet Area</Typography>
                                    <Grid item container spacing={1}>
                                        <Grid item>
                                            <Typography variant='h2'>{property.property_details2?.carea}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h2' style={{ position: 'relative', color: '#98A0AC', }}>{property.property_details2?.munit}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6} md={1.714}>
                                    <Grid item>
                                        <Typography variant='h5' className={classes.propDetailsSubHeading}>Total Area</Typography>
                                    </Grid>

                                    <Grid item container spacing={1}>
                                        <Grid item>
                                            <Typography variant='h2'>{property.property_details2?.tarea}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h2' style={{ position: 'relative', color: '#98A0AC', }}>{property.property_details2?.munit}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6} md={1.714}>
                                    <Typography variant='h5' className={classes.propDetailsSubHeading}>Year Built</Typography>
                                    <Typography variant='h2'>{property.property_details2?.ybuilt}</Typography>
                                </Grid>

                                <Grid item xs={6} md={1.714}>
                                    <Typography variant='h5' className={classes.propDetailsSubHeading}>Handover Date</Typography>
                                    <Typography variant='h2'>{property.property_details2?.hdate}</Typography>
                                </Grid>

                                <Grid item xs={6} md={1.714}>
                                    <Typography variant='h5' className={classes.propDetailsSubHeading}>Public Listing</Typography>
                                    <Typography variant='h2'>{property.property_details2?.plist}</Typography>
                                </Grid>


                                <Grid item xs={6} md={1.714}>
                                    <Typography variant='h5' className={classes.propDetailsSubHeading}>Pets Allowed</Typography>
                                    <Typography variant='h2' style={{ textTransform: 'capitalize' }}>{property.property_details2?.pets}</Typography>
                                </Grid>

                            </Grid>
                        </NormalCard>
                    </Grid>



                    <Grid item xs={12}>
                        <NormalCard>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={4.5}>
                                    <IndividualCard>

                                        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                            <Grid item xs={12} style={{}} className={classes.mapLocated}>
                                                <MapLocated />
                                            </Grid>

                                            <Grid item xs={6} className={classes.mapCo_ordinates}>
                                                <Coordinate />
                                                <Typography variant='h2' className={classes.mapCo_ordinates_Text}>{property.address_details?.lat} {property.address_details?.lang}</Typography>
                                            </Grid>
                                        </Grid>
                                    </IndividualCard>
                                </Grid>


                                <Grid item xs={12} md={3}>
                                    <IndividualCard>
                                        <Grid item >
                                            <Grid container>
                                                <Grid item style={{ position: 'relative', top: '2px' }}>
                                                    <AddressIcon />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h3" style={{ color: '#091B29', fontWeight: 800 }} className={classes.contactSectionHeading}>ADDRESS</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Typography variant='h2' style={{ letterSpacing: '0px', marginBottom: '20px' }}>{property.address_details?.dno}, {property.address_details?.aline1}, {property.address_details?.aline2}, {property.address_details?.landmark}
                                            {property.address_details?.area}, {property.address_details?.city}, {property.address_details?.state}, {property.address_details?.country} - {property.address_details?.pincode}
                                        </Typography>
                                        <Grid item container spacing={1}>
                                            <Grid item style={{ position: 'relative', top: '2px' }}>
                                                <Typography variant='h5'>Longitude : </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='h2'>{property.address_details?.lang}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container spacing={1}>
                                            <Grid item style={{ position: 'relative', top: '2px' }}>
                                                <Typography variant='h5'>Latitude : </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='h2'>{property.address_details?.lat}</Typography>
                                            </Grid>
                                        </Grid>
                                    </IndividualCard>
                                </Grid>


                                <Grid item xs={12} md={4.5}>
                                    <IndividualCard>
                                        <Grid item >
                                            <Grid container >
                                                <Grid item style={{ position: 'relative', top: '2px' }}>
                                                    <PhoneIcon />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h3" style={{ color: '#091B29', fontWeight: 800 }} className={classes.contactSectionHeading}>CONTACT & OTHER INFORMATION</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6}>
                                                <Typography variant='h5' className={classes.propDetailsSubHeading}>Business Phone :</Typography>
                                                <Typography variant='h2'>{property.contact_details?.bphone}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography variant='h5' className={classes.propDetailsSubHeading}>Mobile Phone :</Typography>
                                                <Typography variant='h2'>{property.contact_details?.mphone}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography variant='h5' className={classes.propDetailsSubHeading}>Website :</Typography>
                                                <Typography variant='h2'>{property.contact_details?.website}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography variant='h5' className={classes.propDetailsSubHeading}>Email Address :</Typography>
                                                <Typography variant='h2'>{property.contact_details?.email}</Typography>
                                            </Grid>
                                        </Grid>
                                    </IndividualCard>
                                </Grid>


                            </Grid>

                        </NormalCard>
                    </Grid>

                </Grid >
            )}
        </>
    );
}