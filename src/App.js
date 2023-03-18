import React, {Component, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar.js';
import QuizArea from './components/QuizArea/QuizArea.js';
import QuizLogin from './components/QuizLogin/QuizLogin.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import Register from './components/Register/Register.js';
import LogOutMessage from './components/LogOutMessage/LogOutMessage.js';
import CustomQuiz from './components/CustomQuiz/CustomQuiz.js';
import CustomQuizMaker from './components/CustomQuizMaker/CustomQuizMaker.js';
import JoinQuiz from './components/JoinQuiz/JoinQuiz.js';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import ParticlesBg from 'particles-bg';
import './App.css';
import InvitationCode from './components/InvitationCode/InvitationCode.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      questions: '',
      answers: [],
      correctAnswer: '',
      route: 'login',
      isSignedIn: false,
      customQuestion: "",
      customAnswers: {},
      customCorrectAnswer: []
    }
  }

  setCustomProps = (question, answers, correctAnswer) => {
    this.setState({customQuestion: question});
    this.setState({customAnswers: answers});
    this.setState({customCorrectAnswer: correctAnswer});
  }
  
  onClick = () => {
    fetch("https://opentdb.com/api.php?amount=1&category=19&type=multiple")
      .then(response => response.json())
      .then(result =>  {
        this.setState({ questions: result.results[0].question});
        this.setState({ answers: [...result.results[0].incorrect_answers , result.results[0].correct_answer].sort(() => Math.random() - 0.5)});
        this.setState({ correctAnswer: result.results[0].correct_answer});
      })

      //list = list.sort(() => Math.random() - 0.5)
      .catch(error => console.log('error', error))  
  }
  
  onSignStateChange = (input) => {
    this.setState({isSignedIn: input});
  }
 
  optionCheck = (choice='', id) => {
    let optionsArray = Object.values(document.getElementsByClassName('choices'));
    optionsArray.forEach(elements => {
      elements.style.backgroundColor = '#445661ab';
    })
    let element2 = document.getElementById(id);
    let quizButton = document.getElementById('quizButton');
    element2.style.backgroundColor = '#445661ab';
    if(choice === this.state.correctAnswer){
      element2.style.backgroundColor = 'green';
      quizButton.click();
    }else if(choice !== this.state.correctAnswer ){
      element2.style.backgroundColor = 'red';
      quizButton.click();
    }
  }

  optionCheckForCustom = (choice='', id, correctAnswerForCustom) => {
    let inputsArray = Object.values(document.getElementsByTagName('input'));
    let optionsArray = Object.values(document.getElementsByClassName('choices'));
    optionsArray.forEach(elements => {
      elements.style.backgroundColor = '#445661ab';
    })
    let element2 = document.getElementById(id);
    let quizButton = document.getElementById('quizButton');
    element2.style.backgroundColor = '#445661ab';
    if(choice === correctAnswerForCustom){
      element2.style.backgroundColor = 'green';
      quizButton.click();
    }else if(choice !== correctAnswerForCustom){
      element2.style.backgroundColor = 'red';
      quizButton.click();
    }
  }

  routeChange = (newRoute) => {
    this.setState({route: newRoute});
  }

  channeliOauth = () => {
    const url = 'https://channeli.in/oauth/authorise/?client_id=M7RCulUqlWtqvliQNVQzJsuwq1CTxleRBntQMKKF';
    window.location = url;
  }

  render(){
    const { questions, answers, route, isSignedIn, customQuestion, customAnswers, customCorrectAnswer} = this.state;
    return(
      <>
        <ParticlesBg type="cobweb" bg={true} />
        <Navbar routeChange={this.routeChange} isSignedIn={isSignedIn} />
        {route === 'login' 
          ?
          <LoginForm routeChange={this.routeChange} onSignStateChange={this.onSignStateChange} channeliOauth={this.channeliOauth} />
          :
          (
            route === 'register'
            ?
              <Register routeChange={this.routeChange} onSignStateChange={this.onSignStateChange} />
            :
            (
              route === 'quizArea'
              ?
                <QuizArea routeChange={this.routeChange} optionCheck={this.optionCheck} questions={questions} answers={answers} onClick={this.onClick} /> 
              :
              (
                route === 'logout'
                ?
                <LogOutMessage />
                :
                (
                  route === 'quizLogin'
                  ?
                    <QuizLogin routeChange={this.routeChange} />
                  :
                    (
                      route === 'customQuiz'
                      ?
                      <CustomQuizMaker />
                      :
                      (
                        route === "predefQuiz"
                        ?
                          <JoinQuiz routeChange={this.routeChange} setCustomProps={this.setCustomProps} />
                        :
                        (
                          route === 'inviCode'
                          ?
                          <InvitationCode routeChange={this.routeChange}/>
                          :
                          (
                            route === "leaderboard"
                            ?
                            <LeaderBoard />
                            :
                            <CustomQuiz routeChange={this.routeChange} optionCheckForCustom={this.optionCheckForCustom} onClick={this.onClick} customQuestion={customQuestion} customAnswers={customAnswers} customCorrectAnswer={customCorrectAnswer}/>
                          )
                        )

                      )
                    )

                )

              )
            )
          )
        }
      </> 
    );
  }

}

export default App;
