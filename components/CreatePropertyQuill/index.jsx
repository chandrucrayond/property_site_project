import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillStyle } from "./style";

export default function CreatePropertyQuill() {
  const [value, setValue] = useState('');
  const toolbarOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]

  };
 const classes = QuillStyle();

  return(
    <div className={classes.quillContainer}>
     <ReactQuill theme="snow" value={value} onChange={setValue} modules={toolbarOptions} />
     </div>
  );
  }
