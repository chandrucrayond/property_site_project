import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const SharedLayoutStyle = makeStyles((theme) => ({
  outletStyle: {
    position: "relative !important",
    marginTop: "90px !important",
    // width: 'calc(100% - 40px)',
    // marginLeft: '20px !important',
    // marginRight: '20px !important',
    // marginBottom: '50px !important',
    width: "calc(100% - 80px) !important",
    marginLeft: "80px !important",
    marginRight: "20px !important",
    marginBottom: "50px !important",
  },

  outletStyleTablet: {
    position: "relative !important",
    marginTop: "90px !important",
    width: "calc(100% - 20px) !important",
    marginLeft: "10px !important",
    marginRight: "10px !important",
    marginBottom: "50px !important",
  },

  root: {
    flexGrow: 1,
  },
}));
