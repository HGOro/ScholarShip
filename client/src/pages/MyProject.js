import React, { Component } from "react";
//import SavedResults from "../components/SavedResults"
// import ReadNotesBtn from "../components/ReadNotesBtn"

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
        <h1 className="text-center">My Project</h1>

        <button onClick={this.handleViewMaterialsBtnClick}>View Saved Materials</button>

        {this.state.results.map(result => {
          return (
            <div key={result._id} >
              <p>{result.title}
                <a href={result.href} target="_blank">Read</a>
                {result.comments.map(
                  comment => {
                    return (
                      <p>{comment.comment}</p>
                    )
                  }
                )}
              </p>
            </div>

          )
        })}
      </div>
    )
  }
}

export default MyProject;