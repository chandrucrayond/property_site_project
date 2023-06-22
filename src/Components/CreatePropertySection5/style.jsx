import { makeStyles } from "@mui/styles";

export const CreatePropertySection5Style = makeStyles((theme) => ({
    numberInput: {
        '& input[type=number]::-webkit-inner-spin-button':{ 
          WebkitAppearance: 'none',
          margin: 0,
        },

        '& input[type=number]::-webkit-outer-spin-button': { 
            WebkitAppearance: 'none',
            margin: 0,
          },

        
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none !important',
        }

      },
}));