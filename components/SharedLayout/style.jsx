import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const SharedLayoutStyle = makeStyles((theme) => ({
    outletStyle: {
        position: 'relative !important',
        top: '90px !important',
        //  left: '20px !important',
    },
    // sideBarStyle: {
    //     position: 'relative',
    // },
    // appHeaderStyle: {
    //     position: 'relative',
    // },
    root: {
        flexGrow: 1,
    },
}));