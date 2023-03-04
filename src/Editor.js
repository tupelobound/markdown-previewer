function Editor({click, change, initial}) {
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

export default Editor