import { makeStyles } from "@mui/styles";

export const DashboardSection3_SS_1_Style = makeStyles((theme) => ({
    firstBox: {
        background: "#F5F7FA",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        backgroundBox: "padding-box",
        border: "1px solid #FFFFFF",
        padding: '6px',
    },
    no_of_req: {
        fontFamily: "Nunito Sans !important",
        fontWeight: "bold !important",
        fontSize: "20px !important",
        lineHeight: "27px !important",
        letterSpacing: "0px !important",
        color: "#091B29 !important",
    },
    no_of_main: {
        fontFamily: "Nunito Sans !important",
        fontWeight: "bold !important",
        fontSize: "20px !important",
        lineHeight: "27px !important",
        letterSpacing: "0px !important",
        color: "#091B29 !important",
    },
    dividerSection: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    tabList: {

        '& .MuiButtonBase-root': {
            paddingLeft: '0px',
            paddingRight: '0px',
            paddingBottom: '5px',
        },

        '& .Mui-selected': {
            color: '#5078E1',
            fontWeight: 'bold',
        },

        '& .MuiTabs-flexContainer': {
            columnGap: '25px !important',
        },

    },


    generalDataGrid: {
        '& .MuiGrid-root': {
            paddingLeft: '0px !important',
        },
    },
}));