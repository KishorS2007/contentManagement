import React, { useEffect, useState,useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import './TextEditor.css'
window.katex = katex; 

export default function TextEditor(props) {
  const modules = {
    // syntax: {
    //   highlight: (text) => hljs.highlightAuto(text).value,
    // },
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],       
    //   [{ 'header': 1 }, { 'header': 2 }],        
    ['blockquote', 'code-block'],     
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
    //   [{ 'direction': 'rtl' }],
      // [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video', 'formula'],    
      ['clean']                                         
    ]
  };

  return (
    <>
    
    <ReactQuill 
      theme="snow"
      value={props.inputValue}
      onChange={props.setInputValue}
      modules={modules}
      />
      </>
  );
}
