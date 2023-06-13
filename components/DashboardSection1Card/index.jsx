import { useRouteError, Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Icon } from '@mui/material';
import { ErrorOutline, } from '@mui/icons-material';
import theme from "../ThemeProvider/index.jsx";
import {DashboardSection1CardStyle} from "./style.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActivePropertiesIcon from "../../src/icons/Dashboard/S1ActivePropertiesIcon.jsx";

export default function DashboardSection1Card() {
    const classes = DashboardSection1CardStyle();

    return (
        <></>
    );
}