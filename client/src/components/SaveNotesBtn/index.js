import React from "react";
import "./style.css";
import Input from "../Input"

//handleInput


function SaveNotesBtn(props) {
  return (
     <div>
       <p>Notes:<input></input></p>
       {/* <Input /> */}
       <button onClick={ (e)=>props.clickHandler(e, props.articleId) }>Save Notes</button>
     </div>

    
   );
}

export default SaveNotesBtn;