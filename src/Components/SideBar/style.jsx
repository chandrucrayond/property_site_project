import { makeStyles } from "@mui/styles";

const SideBarStyle = makeStyles((theme) => ({
    drawer: {
        backgroundColor: "#333333 !important",

        "& .MuiDrawer-paper": {
            top: "63px !important",
            backgroundColor: "#333333 !important",
            color: '#FFFFFF !important',
        }
    },
    toggleIcon: {
        backgroundColor: "#5078E1 !important",
        width: '26px !important',
        height: '26px !important',
        // zIndex: '2 !important',
        '&:focus-visible': {
            backgroundColor: "#5078E1 !important",
        },
        '&:visited': {
            backgroundColor: "#5078E1 !important",
        },
        '&:focus': {
            backgroundColor: "#5078E1 !important",
        },
        '&:active': {
            backgroundColor: "#5078E1 !important",
        },
        '&:target': {
            backgroundColor: "#5078E1 !important",
        },
        '&:hover': {
            backgroundColor: "#5078E1 !important",
        },
    },

    togglePara: {
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '100px',
    },

    sideBarHeadingBox: {
        // width: '60%',
    },
    sideBarHeading: {
        display: 'flex',
        marginLeft: '10px',
        // positon:'fixed',
        paddingRight: '10px',
        whiteSpace: 'normal',
    },
}
));
export default SideBarStyle;