import React from "react";
import "./style.css";

function Scrape(props) {
  return (
    <button onClick={props.onClick} className={`scrape ${props[""]}`} {...props} />
  );
}

export default Scrape;
