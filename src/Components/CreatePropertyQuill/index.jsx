import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { QuillStyle } from "./style";

export default function CreatePropertyQuill({data}) {

  const toolbarOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  };

  const classes = QuillStyle();

  const { property_details } = data;

  const handlePropertyDetailsChange = (event, element) => {
      (event, 'property_details', element);
  };

  return (
    <div className={classes.quillContainer}>
      <ReactQuill
        theme="snow"
        value={property_details.pdesc}
        onChange={(event) =>handlePropertyDetailsChange(event, 'pdesc')}
        modules={toolbarOptions}
      />
    </div>
  );
}
