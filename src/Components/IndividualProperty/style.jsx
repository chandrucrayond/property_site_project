import { makeStyles } from "@mui/styles";

export const IndividualProperty_Style = makeStyles((theme) => ({
    ImageSection: {
        textAlign: 'center !important',
    },
    IdSection: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        position: 'relative !important',
        bottom: '10px !important',
        background: "#071741 !important",
        boxShadow: "1px 3px 6px #00000029 !important",
        borderRadius: "5px !important",
        color: '#FFFFFF !important',
        width: '100px !important',
        margin: '0 auto !important',
        padding: '4px !important',
    },
    propDetailsHeading: {
        fontWeight: "normal",
        color: "#4E5A6B",
    },
    contactSectionHeading: {
        marginBottom: '20px !important',
    },
    propDetailsSubHeading: {
        marginBottom: "6px !important",
    },
    mapLocated: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        position: 'relative !important',
        top: '40px !important',
    },
    mapCo_ordinates: {
        background: '#FFFFFF 0% 0 % no - repeat padding-box !important',
        border: '1px solid #CED3DD !important',
        borderRadius: '15px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        width: '80px !important',
        position: 'relative !important',
        top: '80px !important',
        padding: '5px !important',
    },

    mapCo_ordinates_Text: {
        fontWeight: "700 !important",
        fontSize: "12px !important",
        lineHeight: "14px !important",
        color: "#4E5A6B !important",
        marginLeft: '5px !important',   
    },
    
  appBar: {
    position: 'fixed',
    height: '40px',
    width: '100%',
    top: '64px !important',
    display: 'grid !important',
    justifyContent: 'start',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto !important',
    gridTemplateRows: 'auto !important',
    backgroundColor: '#FFFFFF !important',
    paddingLeft: '90px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2) !important',
  },

  appBarTablet: {
    top: '63px !important',
    paddingLeft: '15px',
  },

  appBarMobile: {
    top: '47px !important',
    paddingLeft: '15px',
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

  divider: {
     borderColor: '#E4E8EE !important',
      backgroundColor: '#E4E8EE !important',
      height: '150px !important', 
      width:'0.01px !important', 
      margin: 'auto !important',
    },

    dividerSmallScreen: {
      borderColor: '#E4E8EE !important',
       backgroundColor: '#E4E8EE !important',
       height: '0.1px !important', 
       width:'60% !important', 
       margin: 'auto !important',
     },

    // dividerContainer: {
    //   display: 'flex !important',
    //   justifyContent: 'center !important',
    //   alignItems: 'center !important',
    // },

    propDescription: {
      position: 'relative !important',
      bottom: '10px !important',
    },
}));