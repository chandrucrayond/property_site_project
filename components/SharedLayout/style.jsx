import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const SharedLayoutStyle = makeStyles((theme) => ({
    outletStyle: {
        position: 'absolute !important',
        top: '90px !important',
        left: '90px !important',
    },
    // sideBarStyle: {
    //     position: 'relative',
    // },
    appHeaderStyle: {
        position: 'relative',
    },
    // root: {
    //     flexGrow: 1,
    // },
}));