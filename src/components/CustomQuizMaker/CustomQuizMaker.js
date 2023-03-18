import React, { useState } from 'react';
import { auth } from '../../config/firebase';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

const CustomQuizMaker = ({routeChange}) => {    
    const[newQuestion, setNewQuestion] = useState("");
    const[option1, setOption1] = useState("");
    const[option2, setOption2] = useState("");
    const[option3, setOption3] = useState("");
    const[option4, setOption4] = useState("");
    const[newCorrectAnswer, setNewCorrectAnswer] = useState("");

    const myDatabaseRef = collection(db, "customQuiz")

    const onAddQuestion =async () => {
        await addDoc(myDatabaseRef, {
            answer1: option1,
            answer2: option2,
            answer3: option3,
            answer4: option4,
            correctAnswer: newCorrectAnswer ,
            question: newQuestion,
            userId: auth.currentUser.uid
        })   
    }

    return (
        <div className="container regForm" style={{padding: '40px',width: '40%'}}>
            <h2>Custom Quiz maker</h2>   
            <div className="inputs">
                <label htmlFor="question">Question:</label>  
                <input onChange={(e) => setNewQuestion(e.target.value)} type="text" name="firstName" id="firstName" value={newQuestion} />
                <label htmlFor="option1">Option 1:</label>
                <input onChange={(e) => setOption1(e.target.value)} type="text" name="option1" id="option1" value={option1}/>
                <label htmlFor="option2">Option 2:</label>
                <input onChange={(e) => setOption2(e.target.value)} type="text" name="option2" id="option2" value={option2}/>
                <label htmlFor="option3">Option 3:</label>
                <input onChange={(e) => setOption3(e.target.value)} type="text" name="option3" id="option3" value={option3}/>
                <label htmlFor="option4">Option 4:</label>
                <input onChange={(e) => setOption4(e.target.value)} type="text" name="option4" id="option4" value={option4}/>
                <label htmlFor="correctOption">Correct Answer:</label>
                <input onChange={(e) => setNewCorrectAnswer(e.target.value)} type="text" name="correctOption" id="correctOption" value={newCorrectAnswer} />
                <button onClick={() => {
                    onAddQuestion();
                    setOption1("");
                    setOption2("");
                    setOption3("");
                    setOption4("");
                    setNewQuestion("");
                    setNewCorrectAnswer("");
                    }} className='button-gen buttonRegister' style={{margin: '10px auto'}}>Add Question</button>
            </div>
        </div>  
    );
}

export default CustomQuizMaker;
