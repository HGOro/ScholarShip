import React from "react";
import styled from "styled-components"

const Button = styled.button`
  font-family: 'Wendy One', sans-serif;
  font-size: 20px;
  color: black;
  padding: 4px;
`

function SaveArticleBtn(props) {
  return (
    <div>
      <Button onClick={ (e)=>props.clickHandler(e, props.articleId) }>Save Article</Button>
    </div>
  );
}



export default SaveArticleBtn;