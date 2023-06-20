import { makeStyles } from "@mui/styles";

export const CreatePropertyStyle = makeStyles((theme) => ({

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
    display: 'inline',
    position: 'relative',
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
    position: 'relative',
   top: '30px !important',
  
  },

  createContainerTablet: {
    position: 'relative',
    top: '30px !important',
  },

  createContainerMobile: {
    position: 'relative',
    top: '10px !important',
  },

  createSection: {
    backgroundColor: '#FFFFFF !important',
    borderRadius: '8px !important',
    padding: '20px',
  },

  gridSection: {
    backgroundColor: '#FFFFFF !important',
    borderRadius: '8px !important',
    padding: '20px',
  },

  gridSectionWrap: {
   
  },
}));