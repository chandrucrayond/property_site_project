import { DashboardSection1Style } from "./style.jsx";
import Grid from '@mui/material/Grid';
import DashboardSection1Card from "../DashboardSection1Card/index.jsx";
import { dashboardSection1Data } from "../Json/dashboardSection1.jsx";

export default function DashboardSection1({ dashData }) {
    const classes = DashboardSection1Style();

    return (

        <Grid container spacing={2}>

            {dashData?.cards?.map((property, index) => {
                return (
                    <Grid item xs={6} md={4} lg={1.5} key={index}>
                        <DashboardSection1Card title={property.title} image={property.image} count={property.count} />
                    </Grid>
                );
            })}



        </Grid>

    );
}
