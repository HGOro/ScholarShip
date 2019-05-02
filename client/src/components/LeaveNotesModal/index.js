import React from "react";
import "./style.css";

function LeaveNotesModal(props) {
  return (
     <div>
      <div id="commentModal" class="modal">
            <div class="modal-content">
               <span id="closeComment">&times;</span>
               <div class="modavel-body">
                  <h2 id="titlePopUp">{{this.title}}</h2>
                  <h2 id="hrefPopUp" href={{this.href}}>{{this.href}}</h2> 
                  <h2 id="saved">Notes:</h2>
                  <input type="text" id="commentText"></input>
                  <button class="submit">Submit</button>
               </div>
            </div>
      </div> 
     </div>
   );
}

export default LeaveNotesModal;