import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SideBarStyle from '../SideBar/style';
import DashboardIcon from '../../icons/Dashboard/DashboardIcon';
import CustomerNotFocusedIcon from '../../icons/Dashboard/CustomerNotFocusedIcon';
import CustomerIcon from '../../icons/Dashboard/CustomerIcon';
import { useNavigate, useLocation } from "react-router-dom";
import DashboardNotIcon from '../../icons/Dashboard/DashboardNotIcon';
import { useMediaQuery } from "@mui/material";
import theme from "../ThemeProvider";

const drawerWidth = 240;
const drawerHeight = 100;
const openedMixin = (theme) => ({
    width: '100%',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: '100%',
        height: `${drawerHeight}`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: '100%',
//         height: drawerHeight,
//     }),
// );



const Bar = () => {
    const classes = SideBarStyle();
    const [open, setOpen] = React.useState(false);

    const handleToggleOpen = () => {
        setOpen((open) => !open);
    };
    // const location = useLocation();
    // function handleURLParams() {
    //     const searchParams = new URLSearchParams(location.search);
    //     const paramValue = searchParams.get('paramName');
    //     setSelected(paramValue === 'dashboard' ? 'dashboard' : 'viewProperties');
    // }
    // React.useEffect(() => {
    //     handleURLParams();
    //   }, [location.search]);

    let navigate = useNavigate();
    const [selected, setSelected] = React.useState('dashboard');

    function handleViewDashboard() {
        console.log("going to dashboard");
        setSelected('dashboard');
        navigate("/dashboard");
    }

    function handleViewProperties() {
        console.log("going to view");
        setSelected('viewProperties');
        navigate("/viewProperties");
    }

    return (
        <Drawer anchor={"bottom"} variant="permanent" style={{ position: 'fixed', height: '60px', display: 'flex', justifyContent: 'center' }}>

            <List style={{ display: 'flex', justifyContent: 'center', height: '30px', backgroundColor: '#333333', }}>
                {['Dashboard', 'Properties'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        onClick={index % 2 === 0 ? handleViewDashboard : handleViewProperties}
                    >
                        <ListItemButton
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: index % 2 === 0 ? 'end' : 'start',
                            }}
                        >

                            <ListItemIcon style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                {index % 2 === 0 ? (
                                    selected === 'dashboard' ? (
                                        <DashboardIcon />
                                    ) : (
                                        <DashboardNotIcon />
                                    )
                                ) : (
                                    selected === 'viewProperties' ? (
                                        <CustomerIcon />
                                    ) : (
                                        <CustomerNotFocusedIcon />
                                    )
                                )}

                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Bar;