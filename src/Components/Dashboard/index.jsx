import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { DashboardStyle } from "./style.jsx";
import Grid from "@mui/material/Grid";
import DashboardSection1 from "../DashboardSection1/index.jsx";
import DashboardSection2 from "../DashboardSection2/index.jsx";
import DashboardSection3 from "../DashboardSection3/index.jsx";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const classes = DashboardStyle();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dashData, setDashData] = useState([]);

  function handleClickingFab() {
    navigate("/createProperty");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/propauto");
        const data = await response.json();
        setDashData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

 
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Grid container className={`${classes.dashboardContainer}`} spacing={2}>
        <Grid item xs={12}>
          <DashboardSection1 dashData={dashData} />
        </Grid>
        <Grid item xs={12}>
          <DashboardSection2 dashData={dashData}/>
        </Grid>
        <Grid item xs={12}>
          <DashboardSection3 dashData={dashData}/>
        </Grid>
      </Grid>
      <Fab
        style={{ backgroundColor: "#5078E1", color: "white" }}
        className={`${classes.fabIcon}`}
        onClick={handleClickingFab}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
