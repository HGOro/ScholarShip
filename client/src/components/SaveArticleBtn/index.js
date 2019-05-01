import React from "react";
import "./style.css";


const handleBtnClick = async (event, articleId) => {
  event.preventDefault();
  console.log("Save Article Clicked", articleId);
};

const postData = (articleId) => {
  //  post("http://localhost:3001/api/research/saveArticle/:id", {
  //    method: "POST",
  //    data: {
  //       title: title,
  //       href: href
  //     }).then(function(req, res){
      
  //       )

  //    }

  
}


function SaveArticleBtn(props) {
  return (
    <div>
      <button onClick={(e)=>handleBtnClick(e, props.articleId)}>Save Article</button>
    </div>
  );
}



export default SaveArticleBtn;