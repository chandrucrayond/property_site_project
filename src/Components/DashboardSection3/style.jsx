import { makeStyles } from "@mui/styles";

export const DashboardSection3Style = makeStyles((theme) => ({
    GraphCard: {
        background: '#FFFFFF !important',
        boxShadow: '0px 3px 30px #5C86CB2E !important',
        borderRadius: '4px !important',
        height: '85% !important',
        padding: '20px',
        '& .MuiTabPanel-root': {
            paddingRight: '0px !important',
        },
    },
}));