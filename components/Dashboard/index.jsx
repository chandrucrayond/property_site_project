import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import {DashboardStyle} from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActivePropertiesIcon from "../../src/icons/Dashboard/S1ActivePropertiesIcon.jsx";
import DashboardSection1 from "../DashboardSection1/index.jsx";
import DashboardSection2 from "../DashboardSection2/index.jsx";

export default function Dashboard() {
    const classes = DashboardStyle();

    return (
        <ThemeProvider theme={theme} >
            <Grid container className={`${classes.dashboardContainer}`}>
                <Grid item xs={12}>
                      <DashboardSection1 />
                </Grid>
                <Grid item xs={12}>
                      <DashboardSection2 />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}