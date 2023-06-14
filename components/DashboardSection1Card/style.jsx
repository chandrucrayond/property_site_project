import { makeStyles } from "@mui/styles";

export const DashboardSection1CardStyle = makeStyles((theme) => ({
    Dashboard_S1_Card_Container: {
        width: 'auto !important',
        height: '90px !important',
        backgroundColor: '#FFFFFF !important',
        boxShadow: '0px 3px 30px #5C86CB2E !important',
        borderRadius: '4px !important',
        color: '#091B29 !important',
        backgroundBox: 'padding-box',
        padding: '5px',
    },
    Dashboard_S1_Card_count: {
        display: 'flex',
        alignItems: 'center',
    },
    Dashboard_S1_Card_image: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
    },

}));