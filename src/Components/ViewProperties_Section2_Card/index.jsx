import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ViewProperties_Section2_Card_Style } from './style';
import { DataContext } from '../../Context';
import { ViewCard } from '../CreateCard';
import { useNavigate } from "react-router-dom";

function createData(pid, pname, cname, location, rtype, ptype, status) {
    return { pid, pname, cname, location, rtype, ptype, status };
}

function ViewProperties_Section2_Card({ searchQuery, setSearchQuery }) {
    const classes = ViewProperties_Section2_Card_Style();
    const { propertiesList, setPropertiesList } = React.useContext(DataContext);

    let rows = [];

    if (propertiesList.length >= 0) {
        rows = propertiesList.map((item, index) =>
            createData(
                `Prop ${index + 1}`,
                item.property_details?.pname || '',
                item.property_details?.cname || '',
                `${item.address_details?.area}, ${item.address_details?.city}`,
                item.property_details2?.rtype || '',
                item.property_details2?.ptype || '',
                item.property_details?.status || ''
            )
        );
    }

    const filteredRows = rows.filter(row =>
        row.pname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    let navigate = useNavigate();
    const handleIndividualClick = (row) => {
        let index = row?.pid?.split(" ")[1]-1;
        console.log("Index is " + index + ", value is ");
        console.log( propertiesList[index]);
        navigate("/viewProperties/"+index);
    }

    return (
        <Grid container spacing={2}>
            {filteredRows.map((row) => (
                <Grid item xs={12} sm={6} md={4} key={row.pname} onClick={() => {handleIndividualClick(row)}}>
                    <ViewCard >

                        <Grid container spacing={2}>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Property Id</Typography>
                                <Typography variant="h4">{row.pid}</Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Status</Typography>
                                <Typography
                                    variant="h4"
                                    className={`${classes.tableBody} ${row.status === 'Active' ? classes.activeStatus : classes.inactiveStatus}`}
                                >
                                    {row.status}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Property Name</Typography>
                                <Typography variant="h4">{row.pname}</Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Property Type</Typography>
                                <Typography
                                    variant='h4'
                                    className={`${classes.tableBody} ${classes.propType} ${row.ptype === 'Apartment' && classes.apartmentType}  ${row.ptype === 'Individual house' && classes.houseType}  ${row.ptype === 'Plot' && classes.plotType}`}
                                >
                                    {row.ptype}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Company Name</Typography>
                                <Typography variant="h4">
                                    {row.cname}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Revenue Type</Typography>
                                <Typography variant="h4" >
                                    {row.rtype}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant='h3' className={classes.tableHead}>Location</Typography>
                                <Typography variant="h4" >
                                    {row.location}
                                </Typography>
                            </Grid>

                        </Grid>

                    </ViewCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default ViewProperties_Section2_Card;