
import boiler from "./boiler";

import  {  useState } from 'react'

import { marked } from 'marked'



function Markdown() {

  const [preMarkedText, setPremarkedText ] = useState(boiler) 

  marked.use({
    gfm: true,
    breaks: true,
  });


  const handleChange =(e)=>{
    console.log(e.target.value)
    setPremarkedText(e.target.value)
  }

  
  const markdown = marked(preMarkedText)




 return (
  <>
  
  <textarea id= 'editor' value={preMarkedText} onChange={handleChange}></textarea>
  <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} ></div>
  </>
);



}

export default Markdown;
