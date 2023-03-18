import React from 'react';
import '../QuizArea/QuizArea.css';
import './QuizLogin.css';

const QuizLogin = ({routeChange}) => {
    return (
        <div className='quizArea'>
            <div className="heading" style={{marginBottom: '20px'}}>
                <h1>Quizzing</h1>
                <h2>Options</h2>
            </div>

            <div className="container-quiz-options">
                <a onClick={() => routeChange('customQuiz')}><div className="grid-item">Custom Quiz</div></a>
                <a onClick={() => routeChange('inviCode')}><div className="grid-item">Predefined Quiz</div></a>
                <a onClick={() => routeChange('predefQuiz')}><div className="grid-item">Join Quiz</div></a>
                <a onClick={() => routeChange('leaderboard')}><div className="grid-item">Leaderboard</div></a>
            </div>

            {/* <div className="invitation">
                <label htmlFor="invitationCode">Enter the Invitation Code here</label>
                <input type="text" name="invitation" id="invitationCode" />
            </div> 
            <button onClick={() => routeChange('quizArea') } className='button-gen' style={{margin: '20px 0', padding: '10px'}}>Start Quiz</button> */}
        </div>
    );
}

export default QuizLogin;
