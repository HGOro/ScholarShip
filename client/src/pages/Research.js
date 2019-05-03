import React, { Component } from "react";
// import Scrape from "../components/Scrape";
// import Wiki from "../components/WikiBtn";
// import Input from "../components/Input"
import SaveArticleBtn from "../components/SaveArticleBtn";
import SaveNotesBtn from "../components/SaveNotesBtn";
//import ReadNotesBtn from "../components/ReadNotesBtn"
// import Scrape from "../components/Scrape";
// import Wiki from "../components/WikiBtn";
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
    .then( r => r.json() )
    .then( data => {
      console.log("saveA rticleData result", data)
      console.log("saveArticleData state",this.state)

      this.setState({
        results: this.state.results.map( article => {
          if (article._id !== data._id)
            return article
          
          return data
        })
      }) 
    })
  }

  handleSaveNotesBtnClick = async (event, articleId)=> {
    event.preventDefault();
    console.log("Save Notes Clicked", articleId);
    this.saveNotesData(event, articleId);
  }

  // saveNotesData = async (articleId) => {
  //   fetch(`http://localhost:3001/api/research/saveComment/${articleId}`), {
  //     method: "POST",

  // }
  

  render() {
    return (
      <div>
        <h1 className="text-center">Research My Project</h1>

        <button className="scrape" onClick={this.handleScrapeBtnClick}>News for Kids.net</button>
        <button id="scrape2">PBS.org</button>
        <button id="scrape3">CNN Student</button>
        <button id="scrape4">TIME for Kids</button>
        <button id="scrape4">Scholastic News Online</button>
        
        <p>Wikipedia: <input className="userinput"></input><button className="searchWiki">Search</button></p>

        
        {this.state.results.map( result => {
          return (
            
            <div key={result._id}> 
              <p >
                <a href={result.href} target="_blank" rel="noopener noreferrer">{result.title}</a>
              </p>

              {result.isSave? false : <SaveArticleBtn clickHandler={this.handleSaveArticleBtnClick} articleId={result._id} />}

              <SaveNotesBtn clickHandler={this.handleSaveNotesBtnClick} articleId={result._id} />
                
            </div>
          )
        })}
        {/*
        <Input />
        <WikiBtn/> 
        */}
      </div>
    );
  }
}

export default Research;