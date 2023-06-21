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


function createData(pid, pname, cname, location, rtype, ptype, status) {
    return { pid, pname, cname, location, rtype, ptype, status };
}

const rows = [
    createData('Prop 012', 'Rubix Apartment', 'Property Automate 102', 'T.Nagar,Chennai', 'Lease', 'Individual House', 'Active'),
    createData('Prop 012', 'Apartment 2', 'Property Automate 102', 'T.Nagar,Chennai', 'Rent', 'Apartment', 'Active'),
    createData('Prop 012', 'Apartment 3', 'Property Automate 102', 'T.Nagar,Chennai', 'Lease', 'Apartment', 'Inactive'),
    createData('Prop 012', 'Apartment 4', 'Property Automate 102', 'T.Nagar,Chennai', 'Lease', 'Individual House', 'Inactive'),
    createData('Prop 012', 'Apartment 5', 'Property Automate 102', 'T.Nagar,Chennai', 'Rent', 'Apartment', 'Active'),
];

function BasicTable() {
    const classes = ViewProperties_Section2_Table_Style();
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.pname}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                                className={`${classes.tableBody} ${classes.propType} ${row.ptype === 'Apartment' && classes.apartmentType}  ${row.ptype === 'Individual House' && classes.houseType}  ${row.ptype === 'Plot' && classes.plotType}`}
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


const ViewProperties_Section2_Table = () => {

    return (
        <>

            <BasicTable />
        </>
    );
}

export default ViewProperties_Section2_Table;