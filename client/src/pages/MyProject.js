import React, { Component } from "react";
// import SavedResults from "../components/SavedResults"
// import ReadNotesBtn from "../components/ReadNotesBtn"
 
class MyProject extends Component {
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
        <h1 className="text-center">My Project</h1>
        
        <button>View My Project</button>
        
        {/* <SavedResults />
    
        
          <ReadNotesBtn  /> */}
        
       
      
      </div>
    );
  }
}

export default MyProject;