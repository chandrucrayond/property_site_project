import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const SharedLayoutStyle = makeStyles((theme) => ({
    outletStyle: {
        position: 'relative',
    },
    sideBarStyle: {
        position: 'relative',
    },
}));