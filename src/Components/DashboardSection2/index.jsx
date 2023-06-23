import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon, Card } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import theme from "../ThemeProvider/index.jsx";
import { DashboardSection2Style } from "./style.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Graph1 from "../DashboardSection2Graphs/Graph1.jsx";
import Graph2 from "../DashboardSection2Graphs/Graph2.jsx";
import Graph3 from "../DashboardSection2Graphs/Graph3.jsx";
import Graph4 from "../DashboardSection2Graphs/Graph4.jsx";
import EnlargeIcon from "../../icons/Dashboard/icons8-enlarge-48-1.png";

export default function DashboardSection2({dashData}) {
  const classes = DashboardSection2Style();

  return (
    <Grid container spacing={2}>

      {/* Graph 1  */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.GraphCard}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h2">Property Types</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img src={EnlargeIcon} alt="enlarge icon" />
            </Grid>
          </Grid>
          <Graph1 dashData={dashData.charts}/>
        </Card>
      </Grid>


        {/* Graph 2  */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.GraphCard}>
          <Grid container sx={{ marginBottom: "20px" }}>
            <Grid item xs={6}>
              <Typography variant="h2">Unit Category</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img src={EnlargeIcon} alt="enlarge icon" />
            </Grid>
          </Grid>
          <Graph2 />
        </Card>
      </Grid>


        {/* Graph 3  */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.GraphCard}>
          <Grid container sx={{ marginBottom: "20px" }}>
            <Grid item xs={10}>
              <Typography variant="h2">Vacant Units By Property</Typography>
            </Grid>
            <Grid
              item
              xs={2}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img src={EnlargeIcon} alt="enlarge icon" />
            </Grid>
          </Grid>
          <Graph3 />
        </Card>
      </Grid>


      {/* Graph 4 */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.GraphCard}>
          <Grid container sx={{ marginBottom: "20px" }}>
            <Grid item xs={6}>
              <Typography variant="h2">Total Area</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <img src={EnlargeIcon} alt="enlarge icon" />
            </Grid>
          </Grid>
          <Graph4 dashData={dashData.charts}/>
        </Card>
      </Grid>
    </Grid>
  );
}
