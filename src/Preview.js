import React from 'react'
import { marked } from 'marked'
import * as DOMPurify from 'dompurify'
import PropTypes from 'prop-types'

// Set marked options so that carriage returns are interpreted as line break elements
marked.setOptions({
  breaks: true
})

// Functional component for the preview box
function Preview ({ click, output }) {
  return (
        <div id="preview-container" className="view-box-container">
            <h2 className="heading">Preview</h2>
            <i id="preview-expand" className="fas fa-expand-arrows-alt fa-lg" onClick={click}></i>
            <div
                className="view-box"
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(DOMPurify.sanitize(output)) }}
            />
        </div>
  )
}

Preview.propTypes = {
  click: PropTypes.func.isRequired,
  output: PropTypes.string.isRequired
}

export default Preview
