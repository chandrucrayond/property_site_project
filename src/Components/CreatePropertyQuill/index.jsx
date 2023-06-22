import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillStyle } from "./style";

export default function CreatePropertyQuill({value, setValue}) {
  
  const toolbarOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]

  };
 const classes = QuillStyle();


 const handleChange = (event, element) => {
    setValue(event.target.value, 'property_details', element);
 };

  return(
    <div className={classes.quillContainer}>
     <ReactQuill theme="snow"   
      value={value}
      onChange={handleChange}
      modules={toolbarOptions} />
     </div>
  );
  }
