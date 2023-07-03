import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DashboardSection3_SS_1_Style } from "./style";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ModeIcon from "@mui/icons-material/Mode";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import CircleIcon from "@mui/icons-material/Circle";
import EyeIcon from "../../icons/Dashboard/S1EyeIcon";
import PenIcon from "../../icons/Dashboard/S1PenIcon";

function GeneralRequests({ dashData }) {
    const classes = DashboardSection3_SS_1_Style();

    return (
        <Grid container spacing={3} className={classes.generalDataGrid}>
            <Grid item xs={6}>
                <Typography variant="h2" sx={{ color: "#4E5A6B" }}>
                    General Requests ({dashData.number})
                </Typography>
            </Grid>
            <Grid item xs={6} justifyContent="end" sx={{ display: "flex" }}>
                <Link href="#" underline="none">
                    <Typography variant="h4" sx={{ color: "#5078E1" }}>
                        View All
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <OutlinedInput
                    fullWidth
                    sx={{ height: "40px", fontSize: '14px', borderRadius: '8px', }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="center">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search Request ID, Request Name, Category"
                />
            </Grid>
            <Grid item xs={12} >

                {dashData.request.map((item, index) => (
                    <Grid container key={index} style={{ alignItems: "center", marginBottom: "20px" }}>
                        <Grid item xs={8}>
                            <Typography
                                variant="h2"
                                sx={{ color: "#4E5A6B", fontWeight: "500" }}
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: "12px" }}>
                                {item.category}{" "}
                                <CircleIcon
                                    style={{
                                        fontSize: "6px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                />
                                {item.date}
                                <CircleIcon
                                    style={{
                                        fontSize: "6px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                />
                                {item.id}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} justifyContent="end" sx={{ display: "flex" }}>
                            <Typography variant="body2" style={{ marginRight: "20px" }}>
                                <PenIcon />
                            </Typography>
                            <Typography variant="body2">
                                <EyeIcon />
                            </Typography>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    );
}

function Maintenance({ dashData }) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography variant="h3" sx={{ color: "#4E5A6B" }}>
                    Maintenance ({dashData.number})
                </Typography>
            </Grid>
            <Grid item xs={6} justifyContent="end" sx={{ display: "flex" }}>
                <Link href="#" underline="none">
                    <Typography variant="h3" sx={{ color: "#5078E1" }}>
                        View All
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <OutlinedInput
                    fullWidth
                    sx={{ height: "40px", fontSize: '14px', borderRadius: '8px', }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="center">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search Maintenance ID, Maintenance Name, Category"
                />
            </Grid>
            <Grid item xs={12}>
                {dashData.request.map((item, index) => (
                    <Grid container key={index} style={{ alignItems: "center", marginBottom: "20px" }}>
                        <Grid item xs={8}>
                            <Typography
                                variant="h2"
                                sx={{ color: "#4E5A6B", fontWeight: "500" }}
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: "12px" }}>
                                {item.category}{" "}
                                <CircleIcon
                                    style={{
                                        fontSize: "6px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                />
                                {item.date}
                                <CircleIcon
                                    style={{
                                        fontSize: "6px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                />
                                {item.id}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} justifyContent="end" sx={{ display: "flex" }}>
                            <Typography variant="body2" style={{ marginRight: "20px" }}>
                                <PenIcon />
                            </Typography>
                            <Typography variant="body2">
                                <EyeIcon />
                            </Typography>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    );
}

function SelectTabs({ dashData }) {
    const classes = DashboardSection3_SS_1_Style();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <TabList
                onChange={handleChange}
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className={classes.tabList}
            >
                <Tab
                    label="General requests"
                    sx={{ textTransform: "capitalize",}}
                    value={1}
                />
                <Tab
                    label="Maintenance"
                    sx={{ textTransform: "capitalize", }}
                    value={2}
                />
            </TabList>
            <TabPanel value={1}>
                <GeneralRequests dashData={dashData.general} />
            </TabPanel>
            <TabPanel value={2}>
                <Maintenance dashData={dashData.maintenance} />
            </TabPanel>
        </TabContext>
    );
}

const DashboardSection_3_SS_1 = ({ dashData }) => {
    const classes = DashboardSection3_SS_1_Style();

    console.log(dashData.general.number, 'dashData.general.number   ')
    return (
        <>
            <Grid
                container
                xs={12}
                sm={6}
                className={classes.firstBox}
                justifyContent={"space-around"}
            >
                <Grid item xs={5.5} className={classes.firstSubBox}>
                    <Typography
                        variant="h3"
                        sx={{ color: "#091B29" }}
                    >
                        General Requests
                    </Typography>
                    <Typography variant="h4" className={classes.no_of_req}>
                        {dashData.general.number}
                    </Typography>
                </Grid>

                <Grid item xs={1} className={classes.dividerSection}>
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        style={{
                            borderColor: "#E4E8EE",
                            backgroundColor: "#E4E8EE",
                            height: "35px",
                            width: '0.1px',
                        }}
                    />
                </Grid>

                <Grid item xs={3.5} className={classes.firstSubBox}>
                    <Typography
                        variant="h3"
                        sx={{ color: "#091B29" }}
                    >
                        Maintenance
                    </Typography>
                    <Typography variant="h4" className={classes.no_of_main}>
                        {dashData.maintenance.number}
                    </Typography>
                </Grid>
            </Grid>

            <SelectTabs dashData={dashData} />
        </>
    );
};

export default DashboardSection_3_SS_1;
