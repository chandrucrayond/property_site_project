import { makeStyles } from "@mui/styles";

export const CreatePropertySection3Style = makeStyles((theme) => ({
    textarea: {
        resize: 'vertical', // Disable horizontal resizing
        overflowY: 'auto', // Enable vertical scroll
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        '&::-webkit-scrollbar': {
            width: '6px', // Customize scrollbar
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', // Customize scrollbar thumb color
        },
        '&:active': {
            outline: 'none !important',
        },
        '&:target': {
            outline: 'none !important',
        },
        '&:focus': {
            outline: 'none !important',
        },
        '&:focus-visible': {
            outline: 'none !important',
        },
    },

    numberInput: {
        '& input[type=number]::-webkit-inner-spin-button':{ 
          WebkitAppearance: 'none',
          margin: 0,
        },

        '& input[type=number]::-webkit-outer-spin-button': { 
            WebkitAppearance: 'none',
            margin: 0,
          }
      },

      InputStyling: {
        height: '40px !important', 
        borderRadius: '10px !important',
        border: '1px solid #bdbdbd !important',
        padding: '10px !important',
        fontFamily: 'Nunito Sans !important',
        fontWeight: '600 !important',
        fontSize: '14px !important',
        lineHeight: '19px !important',
        letterSpacing: '0px !important',
        color: '#091B29 !important',
    },

    SelectStyling: {
        height: '40px !important', 
        borderRadius: '10px !important',
        padding: '10px !important',
        paddingLeft: '0 !important',
    },
    toggleButtonListing: {
        height: '40px !important',
        marginRight: '10px !important',
        textTransform: 'none !important',
        borderRadius: '10px !important',
        border: '1px solid #bdbdbd !important',
    },
    inputLabel: {
        fontSize: '18px !important',
        fontWeight: '500 !important',
        letterSpacing: 'inherit !important',
        color: '#757575 !important',
        opacity: '0.7 !important',
     },
    
}));