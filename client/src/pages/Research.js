import React, { Component } from "react";
import Scrape from "../components/Scrape";
import Wiki from "../components/WikiBtn";
import Results from "../components/Results"

 
class Research extends Component {
  state = {
    
  };

 
  componentDidMount() {
    
  }

  handleBtnClick = event => {
    event.preventDefault();
    
  };

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
        
        {/* <Scrape />
        
        <Input />
        <WikiBtn/> 
        
        <Results/> 
        
        <SaveArticleBtn />
        <SaveNoteBtn />
        <ReadNotesBtn />

        <ArticleModal />
        <LeaveNotesModal />
        <ReadNotesModal />

        */}
      </div>
    );
  }
}

export default Research;