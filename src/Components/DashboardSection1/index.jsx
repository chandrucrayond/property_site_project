import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection1Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DashboardSection1Card from "../DashboardSection1Card/index.jsx";
import { dashboardSection1Data } from "../Json/dashboardSection1.jsx";
import Graph1 from "../DashboardSection2Graphs/Graph1.jsx";
import Graph2 from "../DashboardSection2Graphs/Graph2.jsx";
import Graph3 from "../DashboardSection2Graphs/Graph3.jsx";
import Graph4 from "../DashboardSection2Graphs/Graph4.jsx";

export default function DashboardSection1() {
    const classes = DashboardSection1Style();

    return (
       
            <Grid container spacing={2}>

                {dashboardSection1Data.map((property, index) => {
                    return (
                        <Grid item xs={6} md={4} lg={1.5} key={index}>
                            <DashboardSection1Card title={property.title} image={property.image} count={property.count} />
                        </Grid>
                    );
                })}
            </Grid>
      
    );
}
