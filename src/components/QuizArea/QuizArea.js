import React from 'react';
import './QuizArea.css';

const QuizArea = ({optionCheck, answers, questions, onClick}) => {
    return (
        <div className='quizArea'>
            <div className="heading" style={{marginBottom: '20px'}}>
                <h1>Quizzing</h1>
                <h2>Area</h2>
            </div>
            <div className="questionArea">
                <p id="question">Q : {questions}</p>
                <div className="options">
                    <div className="choices" id='option1'>
                        <input onClick={() => optionCheck(answers[0], 'option1')} type="radio" name="answer" id="answer0" />
                        <label htmlFor="answer0">{answers[0]}</label>
                    </div>
                    <div className="choices" id='option2'>
                        <input onClick={() => optionCheck(answers[1], 'option2')} type="radio" name="answer" id="answer1" />
                        <label htmlFor="answer1">{answers[1]}</label>
                    </div>
                    <div className="choices" id='option3'>
                        <input onClick={() => optionCheck(answers[2], 'option3')} type="radio" name="answer" id="answer2" />
                        <label htmlFor="answer2">{answers[2]}</label>
                    </div>
                    <div className="choices" id='option4'>
                        <input onClick={() => optionCheck(answers[3], 'option4')} type="radio" name="answer" id="answer3" />
                        <label htmlFor="answer3">{answers[3]}</label>
                    </div>
                </div>
            </div>
            <button id="quizButton" onClick={onClick} className="button-gen" style={{padding: '10px', marginTop: '20px'}}>Next</button>
        </div>
    );
}

export default QuizArea;
