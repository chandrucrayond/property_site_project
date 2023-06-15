import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon, Card } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection3Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DashboardSection_3_SS_1 from "../DashboardSection3_SS_1/index.jsx";
import DashboardSection_3_SS_2 from "../DashboardSection3_SS_2/index.jsx";

export default function DashboardSection3() {
    const classes = DashboardSection3Style();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card className={classes.GraphCard} >
                <DashboardSection_3_SS_1 />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.GraphCard} >
                    <DashboardSection_3_SS_2 />
                </Card>
            </Grid>
        </Grid>
    );
}