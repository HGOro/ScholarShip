import React from 'react';

function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }


    function AnswerOption(props) {
        return (
            <li className="answerOption">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name="radioGroup"
                    checked={props.answerType === props.answer}
                    id={props.answerType}
                    value={props.answerType}
                    disabled={props.answer}
                    onChange={props.onAnswerSelected}
                />
                <label className="radioCustomLabel" htmlFor={props.answerType}>
                    {props.answerContent}
                </label>
            </li>
        );
    }

    AnswerOption.propTypes = {
        answerType: React.PropTypes.string.isRequired,
        answerContent: React.PropTypes.string.isRequired,
        answer: React.PropTypes.string.isRequired,
        onAnswerSelected: React.PropTypes.func.isRequired
    };

    
    export default AnswerOption;
