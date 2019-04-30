import React from "react";
import "./style.css";

function WikiBtn(props) {
  return (
    <button onClick={props.onClick} className={`searchWiki ${props[""]}`} {...props} />
  );
}

export default WikiBtn;