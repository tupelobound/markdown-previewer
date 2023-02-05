// Ensure FCC test suite is set to correct project
const projectName = "markdown-previewer";
localStorage.setItem("example_project", "Markdown Previewer");

// Set marked options so that carriage returns are interpreted as line break elements
marked.setOptions({
  breaks: true
});

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
  + another one
  - last one
  
A famous person once said:
> "You can use a right arrow to create a blockquote.
> Using them on consecutive lines will continue the same quote"
  
Use text enclosed by two asterisks either side to create **bolded text**. Use one asterisk either side to create *italics*.
  
This project was created using React. Here's the lovely React logo:
  
![React logo alt text](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png "React logo label")
`;

// Create class to wrap entire app
class Previewer extends React.Component {
  constructor(props) {
    super(props);
    // set initial states
    this.state = {
      input: placeholder,
      editorExpanded: false,
      previewExpanded: false,
    };
    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Function to handle change in the text area and pass this data to state
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  // Function to handle click events for expanders
  handleClick = event => {
    if (event.target.id == "editor-expand") {
      if (!this.state.editorExpanded) {
        document.getElementById("preview-container").className = "invisible";
        document.getElementById("editor-container").className = "vb-container-full";
        document.getElementById("editor-expand").className = "fas fa-compress-arrows-alt fa-lg"
        this.setState({
          editorExpanded: true
        });
      } else {
        document.getElementById("preview-container").className = "view-box-container";
        document.getElementById("editor-container").className = "view-box-container";
        document.getElementById("editor-expand").className = "fas fa-expand-arrows-alt fa-lg"
        this.setState({
          editorExpanded: false
        });
      }
    } else {
      if (!this.state.previewExpanded) {
        document.getElementById("editor-container").className = "invisible";
        document.getElementById("preview-container").className = "vb-container-full";
        document.getElementById("preview-expand").className = "fas fa-compress-arrows-alt fa-lg"
        this.setState({
          previewExpanded: true
        });
      } else {
        document.getElementById("editor-container").className = "view-box-container";
        document.getElementById("preview-container").className = "view-box-container";
        document.getElementById("preview-expand").className = "fas fa-expand-arrows-alt fa-lg"
        this.setState({
          previewExpanded: false
        });
      }
    }
  };

  // Render the app
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <Editor change={this.handleChange} initial={this.state.input} click={this.handleClick} />
          <Preview output={this.state.input} click={this.handleClick} />
        </div>
      </div>
    );
  }
}

// Create a component for the header
const Header = () => (
  <><h1 id="header">Welcome to my Markdown Previewer</h1>
  <p id="intro">Type text in the editor window and watch it change in the preview window!</p></>
);

// Create a component for the editor
const Editor = props => (
  <div id="editor-container" className="view-box-container">
    <h2 className="heading">Editor</h2>
    <i id="editor-expand" className="fas fa-expand-arrows-alt fa-lg" onClick={props.click}></i>
    <textarea
      className="view-box" id="editor"
      onChange={props.change}
      value={props.initial}
    />
  </div>
);

// Create a component for the preview box
const Preview = props => (
  <div id="preview-container" className="view-box-container">
    <h2 className="heading">Preview</h2>
    <i id="preview-expand" className="fas fa-expand-arrows-alt fa-lg" onClick={props.click}></i>
    <div
      className="view-box"
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(props.output) }}
    />
  </div>
);

// Render the app to the DOM
const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Previewer));