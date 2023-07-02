import { makeStyles } from "@mui/styles";

export const CreatePropertySection2Style = makeStyles((theme) => ({
      
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

    quillContainer: {
        maxHeight: '110px', /* Set the desired maximum height */
        overflowY: 'auto', /* Add a vertical scrollbar when the content exceeds the height */ 
        // border: '1px solid #bdbdbd !important',
        // borderRadius: '10px !important',
        border:'none',
     },
    

}));