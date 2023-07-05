import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon, Card, useMediaQuery } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection3Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DashboardSection_3_SS_1 from "../DashboardSection3_SS_1/index.jsx";
import DashboardSection_3_SS_2 from "../DashboardSection3_SS_2/index.jsx";

export default function DashboardSection3({ dashData }) {
    const classes = DashboardSection3Style();
    const isMdScreen = useMediaQuery(() => theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(() => theme.breakpoints.down('sm'));
    const isLgScreen = useMediaQuery(() => theme.breakpoints.up('md'));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Card className={`${classes.GraphCard} ${isSmScreen ? classes.GraphCardMobile : ''}`}>
                    <DashboardSection_3_SS_1 dashData={dashData} />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card className={`${classes.GraphCard} ${isSmScreen ? classes.GraphCardMobile : ''}`}>
                    <DashboardSection_3_SS_2 dashData={dashData} />
                </Card>
            </Grid>
        </Grid>
    );
}