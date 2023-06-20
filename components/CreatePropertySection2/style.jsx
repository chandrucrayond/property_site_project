import { makeStyles } from "@mui/styles";

export const CreatePropertySection2Style = makeStyles((theme) => ({
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
}));