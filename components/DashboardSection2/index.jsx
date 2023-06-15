import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon, Card } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection2Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Graph1 from "../DashboardSection2Graphs/Graph1.jsx";
import Graph2 from "../DashboardSection2Graphs/Graph2.jsx";
import Graph3 from "../DashboardSection2Graphs/Graph3.jsx";
import Graph4 from "../DashboardSection2Graphs/Graph4.jsx";


export default function DashboardSection2() {
    const classes = DashboardSection2Style();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.GraphCard} >
                    <Graph1 />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.GraphCard} >
                    <Graph2 />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.GraphCard} >
                    <Graph3 />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.GraphCard} >
                    <Graph4 />
                </Card>
            </Grid>
        </Grid>
    );
}