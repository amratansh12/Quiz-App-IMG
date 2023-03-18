import React, { useState, useEffect } from 'react';
import '../JoinQuiz/JoinQuiz.css';
// import { auth } from '../../config/firebase';
// import { db } from '../../config/firebase';
// import { getDocs, collection } from 'firebase/firestore';

const InvitationCode = ({routeChange}) => {

    // const [question, setQuestion] = useState([]);
    // const [answers, setAnswers] = useState([]);
    // const [correctAns, setCorrectAns] = useState([]);

    // const dataCollectionRef = collection(db, "customQuiz")

    // const getDatabaseList = async () => {
    //     //Read the data from database
    //     try{
    //         const data = await getDocs(dataCollectionRef);
    //         const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
    //         // setDatabase(filteredData[0]);
    //         filteredData.map((data) => {
    //             if(auth.currentUser.uid === data.userId){
    //                 question.push(data.question);
    //                 answers.push(data.answer1, data.answer2, data.answer3, data.answer4);
    //                 correctAns.push(data.correctAnswer);
    //             }
    //         })
    //         setCustomProps(question, answers, correctAns);
    //     }catch(error){
    //         console.log(error.message);
    //     }
    //     //Set the database 
    // }

    return (
        <div className='quizArea'>
            <div className="heading" style={{marginBottom: '10px'}}>
                <h2>Join</h2>
                <h1>Quiz</h1>
            </div>
            <label htmlFor='inviCode' id="inviCodeLabel">Enter the Invitation code</label>
            <input type="text" id="inviCode" />
            <button onClick={() => {
                // getDatabaseList();
                routeChange('quizArea');
            }} className="button-gen" id='startQuiz' style={{marginTop: '10px', padding: '10px'}}>Start Quiz</button>
        </div>
    );
}

export default InvitationCode;
