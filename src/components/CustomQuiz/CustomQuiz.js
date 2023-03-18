import React, { useState } from 'react';
import '../QuizArea/QuizArea.css'

const CustomQuiz = ({optionCheckForCustom,routeChange, customQuestion, customAnswers, customCorrectAnswer}) => {

    const [count,setCount] = useState(0)
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    const onCustomClick = () => {
        setQuestion(customQuestion[count]);
        setCorrectAnswer(customCorrectAnswer[count]);
        setAnswers([customAnswers[4*count], customAnswers[4*count+1], customAnswers[4*count+2], customAnswers[4*count+3]]);
        setCount(count+1);
        if(count >= customQuestion.length){
            routeChange('quizLogin');
        }
    }

    return (
        <div className='quizArea'>
             <div className="heading" style={{marginBottom: '20px'}}>
                <h1>Quizzing</h1>
                <h2>Area</h2>
            </div>
            <div className="questionArea">
                <p id='question'>Q : {question}</p>
                <div className="options">
                    <div className="choices" id='option1'>
                        <input onClick={() => optionCheckForCustom(answers[0], 'option1', correctAnswer)} type="radio" name="answer" id="answer0" />
                        <label htmlFor="answer0">{answers[0]}</label>
                    </div>
                    <div className="choices" id='option2'>
                        <input onClick={() => optionCheckForCustom(answers[1], 'option2', correctAnswer)} type="radio" name="answer" id="answer1" />
                        <label htmlFor="answer0">{answers[1]}</label>
                    </div>
                    <div className="choices" id='option3'>
                        <input onClick={() => optionCheckForCustom(answers[2], 'option3', correctAnswer)} type="radio" name="answer" id="answer2" />
                        <label htmlFor="answer0">{answers[2]}</label>
                    </div>
                    <div className="choices" id='option4'>
                        <input onClick={() => optionCheckForCustom(answers[3], 'option4', correctAnswer)} type="radio" name="answer" id="answer3" />
                        <label htmlFor="answer0">{answers[3]}</label>
                    </div>
                </div>
            </div>
            
            <button button id="quizButton" onClick={onCustomClick} className="button-gen" style={{padding: '10px', marginTop: '20px'}}>Next</button>
        </div>
    );
}

export default CustomQuiz;
