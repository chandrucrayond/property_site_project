import { makeStyles } from "@mui/styles";

export const CreatePropertySection4Style = makeStyles((theme) => ({
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
    inputLabel: {
      fontSize: '18px !important',
      fontWeight: '500 !important',
      letterSpacing: 'inherit !important',
      color: '#757575 !important',
      opacity: '0.7 !important',
   },

   helperText: {
    position: 'relative !important',
    // top: '37px !important',
    left: '2px !important',
    marginLeft: '0px !important',
    color: 'Red !important',
 },
 
}));