import React from "react";
import "./style.css";

//handleBtnClick


function SaveNotesBtn(props) {
  return (
     <div>
       <input className="inputNotes"></input>
       <button className="submitNotes">Save Notes</button>
     </div>

    
   );
}

export default SaveNotesBtn;