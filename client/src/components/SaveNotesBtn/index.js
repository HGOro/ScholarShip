import React, { useState } from 'react';
import styled from "styled-components"

const Div = styled.div`
  font-size: 18px;
  font-family: 'Wendy One', sans-serif; 
`

const Button = styled.button`
  font-family: 'Wendy One', sans-serif;
  font-size: 20px;
  color: black;
  padding: 4px;
  
`

const SaveNotesBtn = (props) => {
  const [input, setInput] = useState("");  

  const clickHandler = (e) => {
    // console.log(props.articleId)
    props.saveNotesHandler(e, props.articleId, input)
    setInput("")
  }
  
  return (
     <Div>
      <label htmlFor="notes">Notes: </label>

      <textarea 
        id="notes" 
        name="notes" 
        onChange={e => setInput(e.target.value)} 
        value={input}
        rows="3"
        cols="35"
      />

       <Button onClick={clickHandler}>Save Notes</Button>
     </Div>

    
   );
}

export default SaveNotesBtn;