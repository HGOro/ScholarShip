import React from "react";
import SaveArticleBtn from "../SaveArticleBtn"
import SaveNotesBtn from "../SaveNotesBtn"
import styled from "styled-components"

const Div = styled.div`
  border: 2px solid black;
  background: lightgray;
  width: 400px;
  height: auto;
  margin: 20px;
  padding: 15px;
  overflow: scroll;
  font-size: 16px;
  font-family: Georgia, Times, "Times New Roman", serif; 
`

const ArticleEach = (props) => (
  <Div>
    <p >
      <a href={props.result.href} target="_blank" rel="noopener noreferrer">{props.result.title}</a>
    </p>

    {
      props.result.isSave ? 
        <SaveNotesBtn articleId={props.result._id} saveNotesHandler={props.saveNotesHandler} /> 
      : 
        <SaveArticleBtn clickHandler={props.clickHandler} articleId={props.result._id} />
    }

  </Div>
)

export default ArticleEach;