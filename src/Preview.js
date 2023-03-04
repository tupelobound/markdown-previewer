import { marked } from 'marked'
import * as DOMPurify from 'dompurify';

// Set marked options so that carriage returns are interpreted as line break elements
marked.setOptions({
    breaks: true
});

function Preview({ click, output }) {
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

export default Preview
