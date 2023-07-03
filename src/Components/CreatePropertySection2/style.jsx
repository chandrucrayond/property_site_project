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
      
        border:'none',
        '& .quill': {
            border: '1px solid #bdbdbd !important',
            borderRadius: '10px !important',
            display: 'flex !important',
            flexDirection: 'column-reverse !important',
           
        },
        '& .ql-toolbar': {
            border: 'none !important',
            borderTop: '1px solid #bdbdbd !important',
        },
        '& .ql-container': {
            border: 'none !important',
            maxHeight: '65px', /* Set the desired maximum height */
            height: '65px !important',
            overflowY: 'auto', /* Add a vertical scrollbar when the content exceeds the height */ 
        },

        '& .ql-formats': {
            opacity: '40% !important',
        },
     },

     

}));