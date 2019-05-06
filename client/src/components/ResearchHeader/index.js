import React from 'react';
import styled from "styled-components"

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Coming+Soon" rel="stylesheet");
    font-family: 'Coming Soon', cursive;
  }`


const Div = styled.div`
  font-size: 16px;
  font-family: Georgia, Times, "Times New Roman", serif;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`

const Button = styled.button`
  font-size: 16px;
  font-family: Georgia, Times, "Times New Roman", serif;
  padding: 8px;
  margin: 10px;
`

const H1 = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 32px;
  font-family: Georgia, Times, "Times New Roman", serif;
`

const ResearchHeader = (props) => {
  

  return (
   
      <Div>
        <H1>Research My Project</H1>

        <Button onClick={props.handleScrapeBtnClick}>News for Kids.net</Button>
        <Button>PBS.org</Button>
        <Button>CNN Student</Button>
        <Button>TIME for Kids</Button>
        <Button>Scholastic News Online</Button>

        <p>Wikipedia: <input className="userinput" /><button className="searchWiki">Search</button></p>

      </Div> 
      

    
   );
}

export default ResearchHeader;