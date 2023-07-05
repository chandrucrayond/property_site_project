import { makeStyles } from "@mui/styles";

export const DashboardStyle = makeStyles((theme) => ({
    dashboardContainer: {
        backgroundColor: '#F5F7FA !important',
    },

    dashboardContainerMobile: {
        position: 'relative !important',
        bottom: '15px !important',
    },
    
    fabIcon: {
        position: 'fixed !important',
        bottom: '30px !important',
        right: '20px !important',    
    },

}));