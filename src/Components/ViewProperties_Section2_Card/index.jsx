import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ViewProperties_Section2_Card_Style } from './style';
import { DataContext } from '../../Context';
import { ViewCard } from '../CreateCard';
import { useNavigate } from "react-router-dom";
import EditIcon from "../../icons/View-Properties/EditIcon";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover } from "@mui/material";
import EditIconHovered from "../../icons/View-Properties/EditIconHovered";

function createData(pid, pname, cname, location, rtype, ptype, status) {
    return { pid, pname, cname, location, rtype, ptype, status };
}

function ViewProperties_Section2_Card({ searchQuery, setSearchQuery }) {
    const [openPopover, setOpenPopover] = React.useState(null);
    const [currentStatus, setCurrentStatus] = React.useState('');
    const classes = ViewProperties_Section2_Card_Style();
    const { propertiesList, setPropertiesList } = React.useContext(DataContext);

    let rows = [];

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
        setCurrentStatus(propertiesList[index].property_details.status === 'Active' ? 'Inactive' : 'Active');
        setAnchorElement(e.currentTarget); // Pass a function as the anchorEl prop
    };

    const handleEditClick = () => {
        console.log(openPopover + " Edit clicked");
        navigate("/editProperty/" + openPopover);
    }

    const handleActiveClick = () => {
        console.log(openPopover + " Active clicked");
        propertiesList[openPopover].property_details.status = currentStatus;
        handleClose();
    }

    const handleDeleteClick = () => {
        console.log(openPopover + " Delete clicked");
        propertiesList.splice(openPopover, 1);
        handleClose();
    }




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
        let index = row?.pid?.split(" ")[1] - 1;
        console.log("Index is " + index + ", value is ");
        console.log(propertiesList[index]);
        navigate("/viewProperties/" + index);
    }

    return (
        <Grid container spacing={2}>
            {filteredRows.map((row, index) => (
                <Grid item xs={12} sm={6} md={4} key={row.pname} >
                    <ViewCard >

                        <Grid container spacing={2}>

                            <Grid item xs={6} onClick={() => { handleIndividualClick(row) }}>
                                <Typography variant='h3' className={classes.tableHead}>Property Id</Typography>
                                <Typography variant="h4" className={`${classes.tableBody}`}>{row.pid}</Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Box className={`${classes.statusContainer}`}>
                                    <Box>
                                        <Typography variant='h3' className={classes.tableHead}>Status</Typography>
                                        <Typography
                                            variant="h4"
                                            className={`${classes.tableBody} ${row.status === 'Active' ? classes.activeStatus : classes.inactiveStatus}`}
                                        >
                                            {row.status}
                                        </Typography>
                                    </Box>
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
                                </Box>
                            </Grid>

                            <Grid item xs={6} onClick={() => { handleIndividualClick(row) }}>
                                <Typography variant='h3' className={classes.tableHead}>Property Name</Typography>
                                <Typography variant="h4" className={`${classes.tableBody}`}>{row.pname}</Typography>
                            </Grid>

                            <Grid item xs={6} onClick={() => { handleIndividualClick(row) }}>
                                <Typography variant='h3' className={classes.tableHead}>Property Type</Typography>
                                <Typography
                                    variant='h4'
                                    className={`${classes.tableBody} ${classes.propType} ${row.ptype === 'Apartment' && classes.apartmentType}  ${row.ptype === 'Individual house' && classes.houseType}  ${row.ptype === 'Plot' && classes.plotType}`}
                                >
                                    {row.ptype}
                                </Typography>
                            </Grid>

                            <Grid item xs={6} onClick={() => { handleIndividualClick(row) }}>
                                <Typography variant='h3' className={classes.tableHead}>Company Name</Typography>
                                <Typography variant="h4" className={`${classes.tableBody}`}>
                                    {row.cname}
                                </Typography>
                            </Grid>

                            <Grid item xs={6} onClick={() => { handleIndividualClick(row) }}>
                                <Typography variant='h3' className={classes.tableHead}>Revenue Type</Typography>
                                <Typography variant="h4" className={`${classes.tableBody}`}>
                                    {row.rtype}
                                </Typography>
                            </Grid>

                            <Grid item xs={6} onClick={() => { handleIndividualClick(row) }}>
                                <Typography variant='h3' className={classes.tableHead}>Location</Typography>
                                <Typography variant="h4" className={`${classes.tableBody}`}>
                                    {row.location}
                                </Typography>
                            </Grid>

                        </Grid>
                    </ViewCard>


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
                </Grid>
            ))}
        </Grid>
    );
}

export default ViewProperties_Section2_Card;