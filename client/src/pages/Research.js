import React, { Component } from "react";
import Scrape from "../components/Scrape";
import Wiki from "../components/WikiBtn";
import Results from "../components/Results"
import SaveArticleBtn from "../components/SaveArticleBtn";
import SaveNotesBtn from "../components/SaveNotesBtn";
import ReadNotesBtn from "../components/ReadNotesBtn"
// import Scrape from "../components/Scrape";
// import Wiki from "../components/WikiBtn";
// import Results from "../components/Results"


 
class Research extends Component {
  state = {
    input: "",
    results: []
  };

 
  componentDidMount() {
    
  }

  handleBtnClick = async event => {
    event.preventDefault();
    console.log("clicked");
    this.fetchData()    
  };

  fetchData = () => {
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
      //this.setState({ suggestion: data.suggestion })       
      this.setState({ results: data.result })
      console.log(data)             
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    })
  }

  handleInputChange = event => {

  };

  handleFormSubmit = event => {
    event.preventDefault();

  }

  loadResults = () => {
    
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Research My Project</h1>

        <button className="scrape" onClick={this.handleBtnClick}>News for Kids.net</button>
        <button id="scrape2">PBS.org</button>
        <button id="scrape3">CNN Student</button>
        <button id="scrape4">TIME for Kids</button>
        <button id="scrape4">Scholastic News Online</button>
        
        <p>Wikipedia: <input class="userinput" value=""></input><button class="searchWiki">Search</button></p>

        
        {this.state.results.map( result => {
          return (
              <div>
                <p key={result._id}>{result.title}
                <a href={result.href} target="_blank">Read</a></p>

                {/* <button className="saveArticle">Save Article</button>
                <button className="leaveNote">Leave Note</button>
                <button className="readNotes">Read Notes</button> */}
                <SaveArticleBtn articleId={result._id} />
                <SaveNotesBtn articleId={result._id} />
                <ReadNotesBtn articleId={result._id} />
            </div>
          )
        })}


        
        {/*
        
        <Input />
        <WikiBtn/> 
        
        <Results
          <SaveArticleBtn />
          <SaveNoteBtn />
          <ReadNotesBtn />

          <ArticleModal />
          <LeaveNotesModal />
          <ReadNotesModal />
        
        /> 
      
        */}
      </div>
    );
  }
}

export default Research;