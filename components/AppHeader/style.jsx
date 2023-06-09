import { makeStyles } from "@mui/styles";

export const appHeaderStyle = makeStyles((theme) => ({
    header: {
        backgroundColor: '#ffffff !important',
       
    },
    username: {
        fontWeight: "bold !important", 
        display: "inline !important", 
        textAlign: "right !important",
        color: "black !important", 
    },
    logoImageSection: {
        // display: "flex",
        // justifyContent: "center",
        // alignSelf: "center",
        transition: "none !important",
    },
    paraSection: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        color: "black",
    },
    appHeaderPara: {
        fontSize: "13px !important",
        lineHeight: "18px !important",
        fontFamily: "Montserrat , sans-serif !important",
        fontWeight: "400 !important",
        color: "#4e6e7e !important",
        opacity: "1 !important",
        cursor: "pointer !important",
    },
    appHeaderParaSelected: {
      position: 'relative',
      top: '3px',
    //   content: '\2022',
      color: '#219ebc',
      fontSize: '2em',
      lineHeight: '0.5',
      marginRight: '3px',
      fontWeight: '600',
    },
    menuButtonPara: {
        marginBottom: '10px !important',
        marginLeft: '25px !important',
    },
    clicked: {
        display: 'list-item',
        color: '#219EBC !important',
        fontWeight: '600 !important',
    },
    notClicked: {
        display: 'block',
    },
    profileButtonLogo: {
        position: 'fixed !important',
        zIndex: '99999 !important',
        paddingTop: '0 !important',
    },
    menuButtonLogo: {
        // position: 'absolute !important',
        // zIndex: '99999 !important',
    },
}));