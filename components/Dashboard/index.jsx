import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import {DashboardStyle} from "./style.jsx";
import Grid from '@mui/material/Grid';

export default function Dashboard() {
    const classes = DashboardStyle();

    return (
        <ThemeProvider theme={theme} className={`${classes.dashboardContainer}`}>
            <Grid container >
            <h2 >Welcome to the properties listing dashboard page</h2>
            </Grid>
        </ThemeProvider>
    );
}