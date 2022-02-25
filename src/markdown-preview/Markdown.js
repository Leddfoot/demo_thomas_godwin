import  {  useState } from 'react'
import { marked } from 'marked'
import boiler from "./boiler";
import Button from "../components/UI/Button/Button"

import './Markdown.css'



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

  const clearEditor =()=>{
    const editor = document.getElementById('editor')
    editor.value = ''
    setPremarkedText('')
  }




 return (
  <div className="markdown-wrapper">
  <h1 className='markdown--title'>React Markdown Previewer</h1>
  <p>This page allows you to test Markdown.js. You can enter markdown specific operators in the text box below, such as # for a large heading or ## for a medium size heading, and preview it below the text box. This tester also supports Github flavored Markdown. Note that this is just a demo, and security is iffy. Read the <a href='https://marked.js.org/'>Markdown Documentation</a> for more information.</p>
  <p>Use the button below to clear the boilerplate from the editor.</p>
  <Button onClick={clearEditor}>Clear the Editor</Button>

  <textarea id= 'editor' value={preMarkedText} onChange={handleChange} className="editor"></textarea>
  <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} className="preview"></div>
  </div>
);



}

export default Markdown;
