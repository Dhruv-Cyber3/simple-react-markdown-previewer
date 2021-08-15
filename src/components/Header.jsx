import "../App.css";
import React from "react";
import { OpenWith } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Header = (props) => {
  const renderButton =
    props.editorMax || props.previewMax ? <CloseIcon /> : <OpenWith />;
  return (
    <div className="header">
      <h3>{props.title}</h3>
      <IconButton onClick={() => props.handleZoom(props.title)}>
        {renderButton}
      </IconButton>
    </div>
  );
};

export default Header;
