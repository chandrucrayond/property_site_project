import { makeStyles } from "@mui/styles";

export const CreateCardStyle = makeStyles((theme) => ({

    styleCardWithHeight: {
        backgroundColor: '#FFFFFF !important',
        borderRadius: '8px !important',
        padding: '20px',
        minHeight: '250px',
        margin: 'auto',
        display: 'flex',
    },

    styleCard: {
        backgroundColor: '#FFFFFF !important',
        borderRadius: '8px !important',
        padding: '20px',
    },

    styleCardZeroTop: {
        backgroundColor: '#FFFFFF !important',
        borderRadius: '8px !important',
        borderTopLeftRadius: '0px !important',
        borderTopRightRadius: '0px !important',
        padding: '20px',
    },

    styleCardZeroBottom: {
        backgroundColor: '#FFFFFF !important',
        borderRadius: '8px !important',
        borderBottomLeftRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
        padding: '20px',
    },

    ViewCard: {
        backgroundColor: '#F5F7FA !important',
        borderRadius: '8px !important',
        borderBottomLeftRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
        padding: '20px',
    },



    styleCardNoRadius: {
        backgroundColor: '#FFFFFF !important',
        padding: '5px',
    },

}));