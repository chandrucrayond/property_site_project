import { makeStyles } from "@mui/styles";

export const DashboardSection1Style = makeStyles((theme) => ({
    GraphCard: {
        background: '#FFFFFF !important',
        // border: '1px solid black !important',
        // justifyContent: "center !important",
        // display: 'flex !important',
        boxShadow: '0px 3px 30px #5C86CB2E !important',
        borderRadius: '4px !important',
    }, 
    GraphCardSection: {
        display: 'grid',
        marginTop: '20px',
        gridTemplateColumns: 'auto auto auto auto',
        objectFit: 'cover',
        gridTemplateRows: 'auto',
    }

}));