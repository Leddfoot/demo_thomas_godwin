 const boiler = `
 
 ### React Markdown Previewer
 
 - [x] Make Beer  🍺🍺🍺
- [ ] ~~Wait until fermentation is 100% finished~~
- [x] Taste Beer
- [x] ~~Figure out why emojis dont work in my previewer~~ 👌🏻🔥👌🏻🔥👌🏻 🍻🍻


 # Large heading
 ## test required h2 
 ###### Smallest heading
 

 - first li
 - second li
 - third li
 > For block quotes to flow you need to add > at the beginning of empty lines
 >
 > For block quotes to flow you need to add > at the beginning of empty lines
 >
> If not the indentation gets jacked up ..like here ..
> For block quotes to flow you need to add > at the beginning of empty lines

***Below is a link to a cool website I wrote in vanilla JS:***
 [Oh Sh!T, is the vinmonomopolet still open?](https://leddfoot-test.herokuapp.com/)

- Example inline code: \`<div>{nuke}</div>\`, between 2 backticks.
- Example code block: 
\`\`\` 
const bullshitFunction=(bs)=>{stuff angry wives say}
\`\`\`


***Note that the image below has alt text!***
![this is the alt text-random small picture from unsplash](https://source.unsplash.com/random/100x100) 

`

export default boiler
