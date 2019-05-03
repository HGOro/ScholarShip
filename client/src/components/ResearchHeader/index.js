import React from 'react';
import styled from "styled-components"

const Div = styled.div`
  font-size: 16px;
  font-family: Georgia, Times, "Times New Roman", serif;
  padding: 20px;
`

const Button = styled.button`
  font-size: 16px;
  font-family: Georgia, Times, "Times New Roman", serif;
  padding: 8px;
  margin: 10px;
`

const ResearchHeader = (props) => {
  

  return (
     <Div>
      <h1 className="text-center">Research My Project</h1>

      <Button onClick={props.handleScrapeBtnClick} >News for Kids.net</Button>
      <Button>PBS.org</Button>
      <Button>CNN Student</Button>
      <Button>TIME for Kids</Button>
      <Button>Scholastic News Online</Button>

      <p>Wikipedia: <input className="userinput"></input><button className="searchWiki">Search</button></p>

     </Div>

    
   );
}

export default ResearchHeader;