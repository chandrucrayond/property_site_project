import { makeStyles } from "@mui/styles";

export const QuillStyle = makeStyles((theme) => ({

 quillContainer: {
    maxHeight: '110px', /* Set the desired maximum height */
    overflowY: 'auto', /* Add a vertical scrollbar when the content exceeds the height */ 
 },

 InputStyling: {
   // height: '60px !important', 
   borderRadius: '10px !important',
   // border: '1px solid #bdbdbd !important',
   padding: '10px !important',
   fontFamily: "Nunito Sans !important",
   fontWeight: '300 !important',
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