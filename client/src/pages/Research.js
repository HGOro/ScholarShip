import React, { Component } from "react";
import ArticleEach from "../components/ArticleEach"
import ResearchHeader from "../components/ResearchHeader";

// import Input from "../components/Input"
// import SaveArticleBtn from "../components/SaveArticleBtn";
// import SaveNotesBtn from "../components/SaveNotesBtn";
//import ReadNotesBtn from "../components/ReadNotesBtn"
// import Scrape from "../components/Scrape";

// import Results from "../components/Results"



class Research extends Component {
  state = {
    input: "",
    results: []
  };

  handleScrapeBtnClick = async event => {
    event.preventDefault();
    this.fetchScrapeData();
  };

  fetchScrapeData = () => {
    fetch("http://localhost:3001/api/research/scrape", {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("inside fetchScrapeData", data)
        this.setState({ results: data.result })
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
  }

  handleSaveArticleBtnClick = async (event, articleId) => {
    event.preventDefault();
    console.log("Save Article Clicked", articleId);
    this.saveArticleData(articleId)
  };

  saveArticleData = async (articleId) => {
    fetch(`http://localhost:3001/api/research/savearticle/${articleId}`, {
      method: "POST",
    })
      .then(r => r.json())
      .then(data => {
        console.log("saveA rticleData result", data)
        console.log("saveArticleData state", this.state)

        this.setState({
          results: this.state.results.map(article => {
            if (article._id !== data._id)
              return article

            return data
          })
        })
      })
  }

  handleSaveNotesBtnClick = async (event, articleId, notes) => {
    event.preventDefault();
    console.log(articleId)
    console.log(notes)
    this.saveNotesData(articleId, notes);
  }

  saveNotesData = async (articleId, notes) => {
    console.log(articleId)
    console.log(notes)
    fetch(`http://localhost:3001/api/research/savecomment/${articleId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notes: notes })
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          ...this.state,
          results: this.state.results.map(result => {
            if (result._id !== data._id) {
              return result
            }
            return data
          })
        })
      })
  }

  render() {
    return (
      <div>

        <ResearchHeader handleScrapeBtnClick={this.handleScrapeBtnClick} />
       
        {this.state.results.map(result => {
          return (
            <ArticleEach
              key={result._id}
              result={result}
              clickHandler={this.handleSaveArticleBtnClick}
              saveNotesHandler={this.handleSaveNotesBtnClick}
            />
          )
        })}
        
      </div>
    );
  }
};

export default Research;