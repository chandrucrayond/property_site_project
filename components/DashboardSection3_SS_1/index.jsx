import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DashboardSection3_SS_1_Style } from "./style";
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import ModeIcon from '@mui/icons-material/Mode';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import CircleIcon from '@mui/icons-material/Circle';

function GeneralRequests() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography variant='h4'>General Requests (12)</Typography>
            </Grid>
            <Grid item xs={6} justifyContent="end" sx={{ display: 'flex', }}>
                <Link href="#" underline="none">
                    <Typography variant='h4'>View All</Typography>
                </Link>
            </Grid>
            <Grid item xs={12} >
                <OutlinedInput fullWidth sx={{ height: '37px' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="center">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    placeholder="Search Request ID, Request Name, Category"
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container style={{ alignItems: 'center', }}>
                    <Grid item xs={8}>
                        <Typography variant='body2'>Water Leakage Repair</Typography>
                        <Typography variant='body2'>
                            Maintenance
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon />
                                    </ListItemIcon>
                                    <ListItemText ><Typography variant='body2'>22 Jan 21</Typography></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon />
                                    </ListItemIcon>
                                    <ListItemText ><Typography variant='body2'>K-F01-U277</Typography></ListItemText>
                                </ListItem>
                            </List>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} justifyContent="end" sx={{ display: 'flex', }}>
                        <Typography variant='body2' style={{ marginRight: '20px', }}><ModeIcon /></Typography>
                        <Typography variant='body2' ><VisibilityIcon /></Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

function SelectTabs() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <TabList onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'divider', }}>
                <Tab label="General requests" sx={{ textTransform: 'capitalize' }} value={1} />
                <Tab label="Maintenance" sx={{ textTransform: 'capitalize' }} value={2} />
            </TabList>
            <TabPanel value={1}><GeneralRequests /></TabPanel>
            <TabPanel value={2}>Item Two</TabPanel>
        </TabContext>
    );
}

const DashboardSection_3_SS_1 = () => {
    const classes = DashboardSection3_SS_1_Style();
    return (
        <>
            <Grid container xs={12} sm={6} className={classes.firstBox} justifyContent={"space-around"}>
                <Grid item className={classes.firstSubBox}>
                    <Typography variant='h4'>General Requests</Typography>
                    <Typography variant='h4'>12</Typography>
                </Grid>
                <Divider orientation="vertical" variant="middle" style={{ borderColor: '#E4E8EE', backgroundColor: '#E4E8EE', height: 'auto' }} />
                <Grid item className={classes.firstSubBox}>
                    <Typography variant='h4'>Maintenance</Typography>
                    <Typography variant='h4'>15</Typography>
                </Grid>
            </Grid>

            <SelectTabs />


        </>
    );
}

export default DashboardSection_3_SS_1;