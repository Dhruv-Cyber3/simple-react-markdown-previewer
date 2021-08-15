import "./App.css";
import Editor from "./components/Editor";
import React from "react";
import Preview from "./components/Preview";

class App extends React.Component {
  state = {
    markdown: "",
    editorMax: false,
    previewMax: false,
  };

  componentDidMount() {
    this.setState({ markdown: placeholderText });
  }

  handleEditorChange = (content) => {
    this.setState({
      markdown: content,
    });
  };

  handleZoom = (title) => {
    if (title === "Editor") {
      this.setState({ editorMax: !this.state.editorMax });
    } else {
      this.setState({ previewMax: !this.state.previewMax });
    }
  };

  render() {
    if (this.state.editorMax === false && this.state.previewMax === false) {
      return (
        <div className="App">
          <Editor
            placeholderText={placeholderText}
            editorMax={this.state.editorMax}
            handleZoom={this.handleZoom}
            content={this.state.markdown}
            handleEditorChange={this.handleEditorChange}
          />

          <div className="preview">
            <Preview
              previewMax={this.state.previewMax}
              handleZoom={this.handleZoom}
              content={this.state.markdown}
            />
          </div>
        </div>
      );
    } else if (
      this.state.editorMax === true &&
      this.state.previewMax === false
    ) {
      return (
        <div className="App">
          <Editor
            placeholderText={placeholderText}
            editorMax={this.state.editorMax}
            handleZoom={this.handleZoom}
            content={this.state.markdown}
            handleEditorChange={this.handleEditorChange}
          />
        </div>
      );
    } else if (
      this.state.editorMax === false &&
      this.state.previewMax === true
    ) {
      return (
        <div className="App">
          <div className="preview">
            <Preview
              previewMax={this.state.previewMax}
              handleZoom={this.handleZoom}
              content={this.state.markdown}
            />
          </div>
        </div>
      );
    }
  }
}

const placeholderText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
  }
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


`;

export default App;
