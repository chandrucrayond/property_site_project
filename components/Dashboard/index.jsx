import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import {DashboardStyle} from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActivePropertiesIcon from "../../src/icons/Dashboard/S1ActivePropertiesIcon.jsx";

export default function Dashboard() {
    const classes = DashboardStyle();

    return (
        <ThemeProvider theme={theme} >
            <Grid container className={`${classes.dashboardContainer}`}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={1} >
                            <Typography variant='h4'>14</Typography>
                            
                        </Grid>
                        <Grid item xs={1}>
                            
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}