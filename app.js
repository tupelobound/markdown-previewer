"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Ensure FCC test suite is set to correct project
var projectName = "markdown-previewer";
localStorage.setItem("example_project", "Markdown Previewer");

// Set marked options so that carriage returns are interpreted as line break elements
marked.setOptions({
  breaks: true
});

// Define a variable for the initial state of the input field
var placeholder = "# This is a h1 element, use one hash to make it!\n  \n## This is a h2 element, use two hashes for this one.\n\nYou can make a link by enclosing text in square brackets, and the address of the link in parentheses. Like this really helpful [link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), for example.\n\nUse back ticks to display inline code e.g. `this is inline code`\n\nBlocks of code use three back ticks to enclose the code e.g.\n```\nvar s = \"A string variable\";\nconsole.log(s);\n```\n\nYou can make ordered lists using numbers:\n\n  1. First list item\n  3. Second list item\n  4. Third list item\n\nNotice how the number in the input can be any number, yet the output maintains the correct number order.\n\nYou can also make an unordered list by using an asterisk, a plus, or a minus:\n\n  * unordered list item\n  + another one\n  - last one\n\nA famous person once said:\n> \"You can use a right arrow to create a blockquote.\n> Using them on consecutive lines will continue the same quote\"\n\nUse text enclosed by two asterisks either side to create **bolded text**. Use one asterisk either side to create *italics*.\n\nThis project was created using React. Here's the lovely React logo:\n\n![React logo alt text](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png \"React logo label\")\n";

// Create class to wrap entire app
var Previewer = /*#__PURE__*/function (_React$Component) {
  _inherits(Previewer, _React$Component);
  var _super = _createSuper(Previewer);
  function Previewer(props) {
    var _this;
    _classCallCheck(this, Previewer);
    _this = _super.call(this, props);
    // set initial states
    _this.handleChange = function (event) {
      _this.setState({
        input: event.target.value
      });
    };
    _this.handleClick = function (event) {
      if (event.target.id == "editor-expand") {
        if (!_this.state.editorExpanded) {
          document.getElementById("preview-container").className = "invisible";
          document.getElementById("editor-container").className = "vb-container-full";
          document.getElementById("editor-expand").className = "fas fa-compress-arrows-alt fa-lg";
          _this.setState({
            editorExpanded: true
          });
        } else {
          document.getElementById("preview-container").className = "view-box-container";
          document.getElementById("editor-container").className = "view-box-container";
          document.getElementById("editor-expand").className = "fas fa-expand-arrows-alt fa-lg";
          _this.setState({
            editorExpanded: false
          });
        }
      } else {
        if (!_this.state.previewExpanded) {
          document.getElementById("editor-container").className = "invisible";
          document.getElementById("preview-container").className = "vb-container-full";
          document.getElementById("preview-expand").className = "fas fa-compress-arrows-alt fa-lg";
          _this.setState({
            previewExpanded: true
          });
        } else {
          document.getElementById("editor-container").className = "view-box-container";
          document.getElementById("preview-container").className = "view-box-container";
          document.getElementById("preview-expand").className = "fas fa-expand-arrows-alt fa-lg";
          _this.setState({
            previewExpanded: false
          });
        }
      }
    };
    _this.state = {
      input: placeholder,
      editorExpanded: false,
      previewExpanded: false
    };
    // bind functions
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  // Function to handle change in the text area and pass this data to state
  _createClass(Previewer, [{
    key: "render",
    value:
    // Render the app
    function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
        id: "main"
      }, /*#__PURE__*/React.createElement(Editor, {
        change: this.handleChange,
        initial: this.state.input,
        click: this.handleClick
      }), /*#__PURE__*/React.createElement(Preview, {
        output: this.state.input,
        click: this.handleClick
      })));
    }
  }]);
  return Previewer;
}(React.Component); // Create a component for the header
var Header = function Header() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "Welcome to my Markdown Previewer"), /*#__PURE__*/React.createElement("p", {
    id: "intro"
  }, "Type text in the editor window and watch it change in the preview window!"));
};

// Create a component for the editor
var Editor = function Editor(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "editor-container",
    className: "view-box-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "heading"
  }, "Editor"), /*#__PURE__*/React.createElement("i", {
    id: "editor-expand",
    className: "fas fa-expand-arrows-alt fa-lg",
    onClick: props.click
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "view-box",
    id: "editor",
    onChange: props.change,
    value: props.initial
  }));
};

// Create a component for the preview box
var Preview = function Preview(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "preview-container",
    className: "view-box-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "heading"
  }, "Preview"), /*#__PURE__*/React.createElement("i", {
    id: "preview-expand",
    className: "fas fa-expand-arrows-alt fa-lg",
    onClick: props.click
  }), /*#__PURE__*/React.createElement("div", {
    className: "view-box",
    id: "preview",
    dangerouslySetInnerHTML: {
      __html: marked(props.output)
    }
  }));
};

// Render the app to the DOM
var rootNode = document.getElementById('app');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Previewer));