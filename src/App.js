import './App.css'
import Header from './Header'
import Editor from './Editor'
import Preview from './Preview'
import { useState } from 'react'

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

function App() {
  // set initial state of output box
  const [output, setOutput] = useState(placeholder)

  // Function to handle change in the text area and pass this data to state
  const handleChange = event => {
    setOutput(event.target.value)
  }

  // Function to handle click events for expanders
  const handleClick = event => {
    console.log(event)
  }

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
