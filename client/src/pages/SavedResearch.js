import React, { Component } from "react";

 
class SavedResearch extends Component {
  state = {
    results: []
    
  };

 
  componentDidMount() {
    
  }

  handleBtnClick = event => {
   event.preventDefault();
    
  };

  loadSavedResults = () => {
    
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My Project Saved</h1>
        
        {/* <SavedResults
          <ReadNotesBtn />
          <ReadNotesModal />
        
        /> 
         
         */}
        
      
      </div>
    );
  }
}

export default SavedResearch;