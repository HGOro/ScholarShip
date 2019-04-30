import React from "react";
import "./style.css";

function Wiki(props) {
  return (
    <button onClick={props.onClick} className={`searchWiki ${props[""]}`} {...props} />
  );
}

export default Wiki;