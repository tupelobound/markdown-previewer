import React from 'react'
import PropTypes from 'prop-types'

// Functional component for the editor box
function Editor ({ click, change, initial }) {
  return (
    <div id="editor-container" className="view-box-container">
      <h2 className="heading">Editor</h2>
      <i id="editor-expand" className="fas fa-expand-arrows-alt fa-lg" onClick={click}></i>
      <textarea
        className="view-box" id="editor"
        onChange={change}
        value={initial}
    />
  </div>
  )
}

Editor.propTypes = {
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  initial: PropTypes.string.isRequired
}

export default Editor
