import React from "react";
import "./style.css";


const handleBtnClick = async (event, articleId) => {
  event.preventDefault();
  console.log("Save Article Clicked", articleId);
  postData(articleId)
};

const postData = async (articleId) => {
  fetch(`http://localhost:3001/api/research/savearticle/${articleId}`, {
    method: "POST",
  })
  .then( r => r.json() )
  .then( function(data){
    console.log(data)
  })
}


function SaveArticleBtn(props) {
  return (
    <div>
      <button onClick={(e)=>handleBtnClick(e, props.articleId)}>Save Article</button>

      {/* //Article Modal Here */}
    </div>
  );
}



export default SaveArticleBtn;