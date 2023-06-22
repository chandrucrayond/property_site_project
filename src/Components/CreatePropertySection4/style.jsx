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
}));