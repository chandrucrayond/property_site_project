import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection1CardStyle } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function DashboardSection1Card({ title, image, count }) {
    const classes = DashboardSection1CardStyle();

    return (
        <Grid container className={classes.Dashboard_S1_Card_Container}>
             <Grid item xs={6} className={classes.Dashboard_S1_Card_count}>
               <Typography variant='h4'>{count}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.Dashboard_S1_Card_image}>
                {image}
            </Grid> 
            <Grid item xs={6}>
            <Typography variant='h4'>{title}</Typography>
            </Grid>         
        </Grid>
    );
}