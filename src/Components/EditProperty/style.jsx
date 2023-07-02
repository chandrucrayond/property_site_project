import { makeStyles } from "@mui/styles";

const EditPropertyStyle = makeStyles((theme) => ({
    appBar: {
        position: 'fixed !important',
        height: '40px !important',
        width: '100% !important',
        top: '64px !important',
        display: 'grid !important',
        justifyContent: 'start !important',
        alignItems: 'center !important',
        gridTemplateColumns: 'auto auto !important',
        gridTemplateRows: 'auto !important',
        backgroundColor: '#FFFFFF !important',
        paddingLeft: '90px !important',
        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2) !important',
    },

    appBarTablet: {
        top: '63px !important',
        paddingLeft: '15px',
    },

    appBarMobile: {
        top: '47px !important',
        paddingLeft: '15px !important',
    },

    toggleIcon: {
        backgroundColor: "#E4E8EE !important",
        width: '26px !important',
        height: '26px !important',
        display: 'flex !important',
        position: 'relative !important',
        marginRight: '10px !important',
        // zIndex: '2 !important',
        '&:focus-visible': {
            backgroundColor: "#E4E8EE !important",
        },
        '&:visited': {
            backgroundColor: "#E4E8EE !important",
        },
        '&:focus': {
            backgroundColor: "#E4E8EE !important",
        },
        '&:active': {
            backgroundColor: "#E4E8EE !important",
        },
        '&:target': {
            backgroundColor: "#E4E8EE !important",
        },
        '&:hover': {
            backgroundColor: "#E4E8EE !important",
        },
    },

    createContainer: {
        // position: 'relative',
        marginTop: '30px !important',

    },

    createContainerTablet: {
        position: 'relative',
        top: '0px !important',
    },

    createContainerMobile: {
        position: 'relative',
        top: '0px !important',
    },

    gridSection: {
        backgroundColor: '#FFFFFF !important',
        borderRadius: '8px !important',
        padding: '20px',
    },

}
));
export default EditPropertyStyle;