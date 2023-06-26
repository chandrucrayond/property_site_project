import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ViewProperties_Section2_Table_Style } from "./style";
import { DataContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import IndividualProperty from "../IndividualProperty";

function createData(pid, pname, cname, location, rtype, ptype, status) {
    return { pid, pname, cname, location, rtype, ptype, status };
}


function ViewProperties_Section2_Table({ searchQuery, setSearchQuery }) {
    const classes = ViewProperties_Section2_Table_Style();
    const { propertiesList, setPropertiesList } = React.useContext(DataContext);

    let rows = [];

    if (propertiesList.length >= 0) {
        rows = propertiesList.map((item, index) =>
            createData(
                `Prop ${index + 1}`,
                item.property_details?.pname || "", // Add null check and provide a default value
                item.property_details?.cname || "", // Add null check and provide a default value
                `${item.address_details?.area}, ${item.address_details?.city}`, // Add null checks
                item.property_details2?.rtype || "", // Add null check and provide a default value
                item.property_details2?.ptype || "", // Add null check and provide a default value
                item.property_details?.status || "" // Add null check and provide a default value
            )
        );
    }

    // Inside your component
    const filteredRows = rows.filter(row =>
        row.pname.toLowerCase().includes(searchQuery.toLowerCase())
    );


    let navigate = useNavigate();

    const handleIndividualClick = (row) => {
        let index = row.pid.split(" ")[1]-1;
        console.log("Index is " + index + ", value is ");
        console.log( propertiesList[index]);
        navigate("/viewProperties/"+index);
    }
    return (
        <TableContainer className={classes.table}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#F2F4F7' }}>

                        <TableCell><Typography variant='h3' className={classes.tableHead}>Property Id</Typography></TableCell>
                        <TableCell ><Typography variant='h3' className={classes.tableHead}>Property Name</Typography></TableCell>
                        <TableCell ><Typography variant='h3' className={classes.tableHead}>Company Name</Typography></TableCell>
                        <TableCell ><Typography variant='h3' className={classes.tableHead}>Location</Typography></TableCell>
                        <TableCell ><Typography variant='h3' className={classes.tableHead}>Revenue Type</Typography></TableCell>
                        <TableCell ><Typography variant='h3' className={classes.tableHead}>Property Type</Typography></TableCell>
                        <TableCell ><Typography variant='h3' className={classes.tableHead}>Status</Typography></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredRows.map((row) => (
                        <TableRow
                            key={row.pname}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {handleIndividualClick(row)}}
                        >
                            <TableCell component="th" scope="row">
                                <Typography variant='h2' className={classes.tableBody}>{row.pid}</Typography>
                            </TableCell>
                            <TableCell ><Typography variant='h2' className={classes.tableBody}>{row.pname}</Typography></TableCell>
                            <TableCell ><Typography variant='h2' className={classes.tableBody}>{row.cname}</Typography></TableCell>
                            <TableCell ><Typography variant='h2' className={classes.tableBody}>{row.location}</Typography></TableCell>
                            <TableCell ><Typography variant='h2' className={classes.tableBody}>{row.rtype}</Typography></TableCell>
                            <TableCell >
                                <Typography
                                    variant='h2'
                                    className={`${classes.tableBody} ${classes.propType} ${row.ptype === 'Apartment' && classes.apartmentType}  ${row.ptype === 'Individual house' && classes.houseType}  ${row.ptype === 'Plot' && classes.plotType}`}
                                >
                                    {row.ptype}
                                </Typography>
                            </TableCell>
                            <TableCell >
                                <Typography
                                    variant="h2"
                                    className={`${classes.tableBody} ${row.status === 'Active' ? classes.activeStatus : classes.inactiveStatus}`}
                                >
                                    {row.status}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



export default ViewProperties_Section2_Table;