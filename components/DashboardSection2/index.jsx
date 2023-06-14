import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection2Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Graph1 from "../DashboardSection2Graphs/Graph1.jsx";
import Graph2 from "../DashboardSection2Graphs/Graph2.jsx";
export default function DashboardSection2() {
    const classes = DashboardSection2Style();

    return (
        <Grid container >
            <Grid item xs={12} sm={6} lg={3} className={classes.GraphCard}>
                <Graph1 />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className={classes.GraphCard}>
                <Graph2 />
            </Grid>
        </Grid>
    );
}