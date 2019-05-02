import React from "react";
import Question from '../components/Quiz/Question';
import quizQuestions from '../../../routes/api/quizQuestions'


constructor(props) {
  super(props);
  this.state = {
   counter: 0,
   questionId: 1,
   question: '',
   answerOptions: [],
   answer: '',
   answersCount: {
     correct: 0,
     wrong: 0
   },
   result: ''
  };
};

render (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Math Quiz</h2>
    </div>
    <Question content="10 X 10" />
  </div>
)

function Math() {
  return (
    <div>
      <h1>Math</h1>
      <p>
        Who's ready for some maaaaath!
      </p>
    </div>
  );
}


render (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Multiplication Quiz</h2>
    </div>
    <Question content="10 X 10" />
  </div>
)




export default Math;