import React, { Component } from "react";
import styled from "styled-components"
//import SavedResults from "../components/SavedResults"
// import ReadNotesBtn from "../components/ReadNotesBtn"

const H1 = styled.h1`
  text-align: center;
  font-family: 'Wendy One', sans-serif;
  padding: 20px;
`

const Button = styled.button`
  font-size: 24px;
  font-family: 'Wendy One', sans-serif;
  padding: 8px;
  margin: 10px;
`

const P = styled.p`
  font-family: 'Wendy One', sans-serif;
  padding: 4px;
  font-size: 22px;
`


class MyProject extends Component {
  state = {
    results: []
  };



  handleViewMaterialsBtnClick = event => {
    event.preventDefault();
    this.fetchSavedArticles();
  };

  fetchSavedArticles = () => {
    fetch("http://localhost:3001/api/research/readarticles", {
      method: "GET"
    }
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("inside fetchSavedArticles", data)
        console.log(data);
        this.setState({ results: data })
      })
      .catch((error) => {
        console.log(error, "catch read article error")
      })
  }

  // handleReadNotesBtnClick = event => {
  //  event.preventDefault();

  // };



  render() {
    return (
      <div>
        <H1>My Project</H1>

        <Button onClick={this.handleViewMaterialsBtnClick}>View Saved Materials</Button>

        {this.state.results.map(result => {
          return (
            <div key={result._id} >
              <P>{result.title}
                <a href={result.href} target="_blank">Read</a>
                {result.comments.map(
                  comment => {
                    return (
                      <p>{comment.comment}</p>
                    )
                  }
                )}
              </P>
            </div>

          )
        })}
      </div>
    )
  }
}

export default MyProject;