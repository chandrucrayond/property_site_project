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
import EditIcon from "../../icons/View-Properties/EditIcon";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover } from "@mui/material";
import EditIconHovered from "../../icons/View-Properties/EditIconHovered";


function createData(pid, pname, cname, location, rtype, ptype, status) {
    return { pid, pname, cname, location, rtype, ptype, status };
}


function ViewProperties_Section2_Table({ searchQuery, setSearchQuery }) {
    const[openPopover,setOpenPopover]=React.useState(null);
    const[currentStatus, setCurrentStatus] = React.useState('');
    const classes = ViewProperties_Section2_Table_Style();
    const { propertiesList, setPropertiesList } = React.useContext(DataContext);

    // Managing the state of the popover
    const [anchorElement, setAnchorElement] = React.useState(null);
    const handleClose = () => {
        setAnchorElement(null);
    };
    const open = Boolean(anchorElement);
    const id = open ? 'simple-popover' : undefined;
    //End of managing the state of the popover


    //Start of the section OnMouseOver for the edit icon
    // Use an array of booleans to track the hover state for each row
    const [isRowHovered, setIsRowHovered] = React.useState(
        Array(propertiesList.length).fill(false)
    );

    const handleMouseOver = (index) => {
        setIsRowHovered((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    const handleMouseOut = (index) => {
        setIsRowHovered((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };
    //End of the section OnMouseOver for the edit icon


    const handleEditIconClick = (row, e) => {
        // debugger
        let index = row.pid.split(" ")[1] - 1;
        console.log("Index is " + index + ", value is ");
        console.log(propertiesList[index]);
        setOpenPopover(index);
        setCurrentStatus(propertiesList[index].property_details.status==='Active' ?  'Inactive' : 'Active');
        setAnchorElement(e.currentTarget); // Pass a function as the anchorEl prop
    };

   const handleEditClick = () => {
        console.log(openPopover+" Edit clicked");
        navigate("/editProperty/" + openPopover);
    }

    const handleActiveClick = () => {
        console.log(openPopover+" Active clicked");
        propertiesList[openPopover].property_details.status = currentStatus;
        handleClose();
    }

    const handleDeleteClick = () => {
        console.log(openPopover+" Delete clicked");
        propertiesList.splice(openPopover,1);
        handleClose();
    }


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
        let index = row.pid.split(" ")[1] - 1;
        navigate("/viewProperties/" + index);
    }


    return (
        <div>
            <TableContainer className={classes.table}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#F2F4F7', borderRadius: '6px', }}>
                        <TableRow sx={{ backgroundColor: '#F2F4F7', borderRadius: '6px', }} >

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
                        {filteredRows.map((row, index) => (
                            <TableRow
                                key={row.pid}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={{ cursor: 'pointer' }}
                            >

                                <TableCell component="th" scope="row" onClick={() => { handleIndividualClick(row) }}>
                                    <Typography variant='h2' className={classes.tableBody}>{row.pid}</Typography>
                                </TableCell>
                                <TableCell onClick={() => { handleIndividualClick(row) }}><Typography variant='h2' className={classes.tableBody}>{row.pname}</Typography></TableCell>
                                <TableCell onClick={() => { handleIndividualClick(row) }}><Typography variant='h2' className={classes.tableBody}>{row.cname}</Typography></TableCell>
                                <TableCell onClick={() => { handleIndividualClick(row) }}><Typography variant='h2' className={classes.tableBody}>{row.location}</Typography></TableCell>
                                <TableCell onClick={() => { handleIndividualClick(row) }}><Typography variant='h2' className={classes.tableBody}>{row.rtype}</Typography></TableCell>
                                <TableCell onClick={() => { handleIndividualClick(row) }}>
                                    <Typography
                                        variant='h2'
                                        className={`${classes.tableBody} ${classes.propType} ${row.ptype === 'Apartment' && classes.apartmentType}  ${row.ptype === 'Individual house' && classes.houseType}  ${row.ptype === 'Plot' && classes.plotType}`}
                                    >
                                        {row.ptype}
                                    </Typography>
                                </TableCell>

                                <TableCell className={`${classes.statusContainer}`}>
                                    <Typography
                                        variant="h2"
                                        className={`${classes.tableBody} ${row.status === 'Active' ? classes.activeStatus : classes.inactiveStatus}`}
                                    >
                                        {row.status}
                                    </Typography>
                                    <Box
                                        onClick={(e) => {
                                            handleEditIconClick(row, e);
                                        }}
                                        className={`${classes.editIconContainer}`}
                                        onMouseOver={() => handleMouseOver(index)} // Pass the index to the event handlers
                                        onMouseOut={() => handleMouseOut(index)} // Pass the index to the event handlers
                                    >
                                        {isRowHovered[index] ? <EditIconHovered /> : <EditIcon />}
                                    </Box>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorElement}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                className={`${classes.popoverContainer}`}
            >
                <List style={{ padding: '0' }}>
                    <ListItem disablePadding>
                        <ListItemButton className={`${classes.listItemButton}`} onClick={handleEditClick}>
                            <ListItemText><Typography variant="h2" className={`${classes.editListText}`}>Edit</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider className={`${classes.dividerInEdit}`} />
                    <ListItem disablePadding>
                        <ListItemButton className={`${classes.listItemButton}`} onClick={handleActiveClick}>
                            <ListItemText><Typography variant="h2" className={`${classes.editListText}`}>{currentStatus}</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider className={`${classes.dividerInEdit}`} />
                    <ListItem disablePadding>
                        <ListItemButton className={`${classes.listItemButton}`} onClick={handleDeleteClick}>
                            <ListItemText><Typography variant="h2" className={`${classes.editListText}`}>Delete</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>



            </Popover>
        </div>

    );
}



export default ViewProperties_Section2_Table;