import React from "react";
import "./style.css";

function SaveArticleBtn(props) {
  return (
    <div>
      <button onClick={ (e)=>props.clickHandler(e, props.articleId) }>Save Article</button>

      {/* //Article Modal Here */}
    </div>
  );
}



export default SaveArticleBtn;