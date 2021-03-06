import React from 'react';
import styled from "styled-components"

// import { createGlobalStyle } from "styled-components";
// const GlobalStyles = createGlobalStyle`
//   body {
//     @import url("https://fonts.googleapis.com/css?family=Coming+Soon" rel="stylesheet");
//     font-family: 'Coming Soon', cursive;
//   }`


const Div = styled.div`
  font-size: 20px;
  font-family: 'Wendy One', sans-serif;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`

const Button = styled.button`
  font-size: 24px;
  font-family: 'Wendy One', sans-serif;
  padding: 8px;
  margin: 10px;
`

const H1 = styled.h1`
  text-align: center;
  padding: 10px;
  font-family: 'Wendy One', sans-serif;
  color: black;
`

const P = styled.p`
  font-size: 24px;
  font-family: 'Wendy One', sans-serif;
  padding: 8px;
  margin: 10px;
`



const ResearchHeader = (props) => {
  

  return (
   
      <Div>
        <H1>Research Portal</H1>

        <Button onClick={props.handleScrapeBtnClick}>News for Kids.net</Button>
        <Button>PBS.org</Button>
        <Button>CNN Student</Button>
        <Button>TIME for Kids</Button>
        <Button>Scholastic News Online</Button>

        <P>Wikipedia: <input className="userinput" /><Button className="searchWiki">Search</Button></P>

      </Div> 
      

    
   );
}

export default ResearchHeader;