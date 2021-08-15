import React, { Component } from "react";
import Header from "./Header";

export class Editor extends Component {
  state = {
    text: "",
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
    this.props.handleEditorChange(e.target.value);
  };

  render() {
    const rows = this.props.editorMax ? "40" : "10";
    return (
      <>
        <div className="editor">
          <Header
            editorMax={this.props.editorMax}
            handleZoom={this.props.handleZoom}
            title="Editor"
          />
          <textarea
            name="editor"
            id="editor"
            cols="80"
            rows={rows}
            onChange={this.handleTextChange}
            defaultValue={this.props.placeholderText}
          ></textarea>
        </div>
      </>
    );
  }
}

export default Editor;
