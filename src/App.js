import './App.css'
import Header from './Header'
import Editor from './Editor'
import Preview from './Preview'
import { useState, React } from 'react'

// Define a variable for the initial state of the input field
const placeholder = `# This is a h1 element, use one hash to make it!

## This is a h2 element, use two hashes for this one.

You can make a link by enclosing text in square brackets, and the address of the link in parentheses. Like this really helpful [link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), for example.

Use back ticks to display inline code e.g. \`this is inline code\`

Blocks of code use three back ticks to enclose the code e.g.
\`\`\`
var s = "A string variable";
console.log(s);
\`\`\`

You can make ordered lists using numbers:

  1. First list item
  3. Second list item
  4. Third list item

Notice how the number in the input can be any number, yet the output maintains the correct number order.

You can also make an unordered list by using an asterisk, a plus, or a minus:

  * unordered list item
  * another one
  * last one

A famous person once said:
> "You can use a right arrow to create a blockquote.
> Using them on consecutive lines will continue the same quote"

Use text enclosed by two asterisks either side to create **bolded text**. Use one asterisk either side to create *italics*.

This project was created using React. Here's the lovely React logo:

![React logo alt text](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png "React logo label")
`

function App () {
  // set initial state of output box
  const [output, setOutput] = useState(placeholder)
  // set initial state of editor and preview boxes, expanded or not
  const [expanded, setExpanded] = useState({
    editor: false,
    preview: false
  })

  // Function to handle change in the text area and pass this data to state
  const handleChange = event => {
    setOutput(event.target.value)
  }

  // Function to handle click events for expanders
  const handleClick = event => {
    // If the editor expand button is pressed:
    if (event.target.id === 'editor-expand') {
      // And if the the editor isn't already expanded
      if (!expanded.editor) {
        document.getElementById('preview-container').className = 'invisible' // Make the preview box invisible
        document.getElementById('editor-container').className = 'vb-container-full' // Expand the editor box
        document.getElementById('editor-expand').className = 'fas fa-compress-arrows-alt fa-lg' // Change the icon
        // Set the new state
        setExpanded({
          ...expanded,
          editor: true
        })
        // Otherwise:
      } else {
        document.getElementById('preview-container').className = 'view-box-container' // Make the preview box visible
        document.getElementById('editor-container').className = 'view-box-container' // Shrink the editor box
        document.getElementById('editor-expand').className = 'fas fa-expand-arrows-alt fa-lg' // Change the icon
        // Set the new state
        setExpanded({
          ...expanded,
          editor: false
        })
      }
    } else {
      // If the preview expand button is pressed
      // And if the the preview isn't already expanded
      if (!expanded.preview) {
        document.getElementById('editor-container').className = 'invisible' // Make the editor box invisible
        document.getElementById('preview-container').className = 'vb-container-full' // Expand the preview box
        document.getElementById('preview-expand').className = 'fas fa-compress-arrows-alt fa-lg' // Change the icon
        // Set the new state
        setExpanded({
          ...expanded,
          preview: true
        })
        // Otherwise:
      } else {
        document.getElementById('editor-container').className = 'view-box-container' // Make the editor box visible
        document.getElementById('preview-container').className = 'view-box-container' // Shrink the preview box
        document.getElementById('preview-expand').className = 'fas fa-expand-arrows-alt fa-lg' // Change the icon
        // Set the new state
        setExpanded({
          ...expanded,
          preview: false
        })
      }
    }
  }

  // Return the app content
  return (
    <div>
      <Header />
      <div id='main'>
        <Editor change={handleChange} initial={output} click={handleClick} />
        <Preview output={output} click={handleClick} />
      </div>
    </div>
  )
}

export default App
