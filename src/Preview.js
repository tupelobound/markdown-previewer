function Preview({ click, output }) {
    return (
        <div id="preview-container" className="view-box-container">
            <h2 className="heading">Preview</h2>
            <i id="preview-expand" className="fas fa-expand-arrows-alt fa-lg" onClick={click}></i>
            <div
                className="view-box"
                id="preview"
            />
        </div>
    )
}

export default Preview

//__html: marked(output)
//dangerouslySetInnerHTML={"Hello World!"}