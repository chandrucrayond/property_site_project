import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const SharedLayoutStyle = makeStyles((theme) => ({
    outletStyle: {
        position: 'relative !important',
        marginTop: '90px !important',
        // width: 'calc(100% - 20px)',
        marginLeft: '20px !important',
        marginRight: '20px !important',
        marginBottom: '50px !important',
    },
    root: {
        flexGrow: 1,
    },
}));