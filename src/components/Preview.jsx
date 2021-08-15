import React from "react";
import marked from "marked";
import Header from "./Header";

const Preview = (props) => {
  const renderer = new marked.Renderer();
  const markedContent = marked(props.content);
  const classes = `previewDiv ${props.previewMax ? "previewActive" : ""}`;

  return (
    <>
      <Header
        previewMax={props.previewMax}
        handleZoom={props.handleZoom}
        title="Preview"
      />
      <div
        className={classes}
        dangerouslySetInnerHTML={{
          __html: marked(markedContent, { renderer: renderer }),
        }}
      />
    </>
  );
};

export default Preview;
