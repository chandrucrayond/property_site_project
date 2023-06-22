import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import { DashboardStyle } from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActivePropertiesIcon from "../../src/icons/Dashboard/S1ActivePropertiesIcon.jsx";
import DashboardSection1 from "../DashboardSection1/index.jsx";
import DashboardSection2 from "../DashboardSection2/index.jsx";
import DashboardSection3 from "../DashboardSection3/index.jsx";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
      const classes = DashboardStyle();
      let navigate = useNavigate();
      function handleClickingFab() {
        navigate("/createProperty");
      }

      return (
            <>
                  <Grid container className={`${classes.dashboardContainer}`} spacing={2}>
                        <Grid item xs={12}>
                              <DashboardSection1 />
                        </Grid>
                        <Grid item xs={12}>
                              <DashboardSection2 />
                        </Grid>
                        <Grid item xs={12}>
                              <DashboardSection3 />
                        </Grid>

                  </Grid>
                  <Fab style={{ backgroundColor: "#5078E1", color: 'white' }} className={`${classes.fabIcon}`} onClick={handleClickingFab}>
                        <AddIcon />
                  </Fab>
            </>

      );
}