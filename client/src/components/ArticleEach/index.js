import React from "react";
import SaveArticleBtn from "../SaveArticleBtn"
import SaveNotesBtn from "../SaveNotesBtn"
import styled from "styled-components"

const Div = styled.div`
  border: 2px solid black;
  background: lightgray;
  width: 600px;
  height: auto;
  margin: 20px;
  padding: 15px;
  overflow: scroll;
  font-size: 18px;
  font-family: 'Wendy One', sans-serif;
`

const IFrameDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const P = styled.p`
  font-family: 'Wendy One', sans-serif;
  font-size: 24px;
  color: black;
  text-shadow: 1px 1px gray;
  padding: 6px;

`

const ArticleEach = (props) => (
  <Div>
    <IFrameDiv>
      <iframe id="inlineFrameExample"
        title="Inline Frame Example"
        width="500"
        height="200"
        src={props.result.href}>
      </iframe>
      <div><P>{props.result.title}</P></div>
    </IFrameDiv>

    <div>
    {
      // (props.result.comments) &&
      // (props.result.comments.length) &&
      props.result.comments.map(comment => (
        <p>{comment.comment}</p>
      ))
    }
    </div>

    {
      props.result.isSave ?
        <SaveNotesBtn articleId={props.result._id} saveNotesHandler={props.saveNotesHandler} />
        :
        <SaveArticleBtn clickHandler={props.clickHandler} articleId={props.result._id} />
    }

  </Div>
)

export default ArticleEach;