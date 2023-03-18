import React, {useState} from 'react';
import './LoginForm.css';
import {auth, googleProvider} from '../../config/firebase.js';
import { signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';

const LoginForm = ({routeChange, onSignStateChange, channeliOauth}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInWithEmAndPass = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser.email);
            routeChange('quizLogin');
            onSignStateChange("true");
        }catch(error){
            alert(error.message);
            routeChange('login')
        }
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
            routeChange('quizLogin');
            onSignStateChange("true");
        }catch(error){
            console.log(error);
            routeChange('login')
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>   
            <div className="inputs">
                {/* email */}
                <label htmlFor="email">Email</label>  
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />

                {/* password */}
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password"  />

                {/* login button */}
                <button onClick={async() => {
                    await signInWithEmAndPass();
                    window.localStorage.setItem("isLoggedIn", true);
                    // routeChange('quizLogin');
                    
                }} className='button-login-form' style={{margin: '10px auto'}}>Login</button>
                <hr style={{width: '250px', margin: '10px 0'}}/>

                {/* Google login button */}
                <button onClick={async () => {
                    try{
                        await signInWithGoogle();
                        window.localStorage.setItem("isLoggedIn", true);
                        // routeChange('quizLogin');
                    }catch(error){
                        console.log(error)
                        routeChange('login')
                    }
                }}  className='button-login-form' style={{width: '80%', margin: '15px auto 0px auto'}}>Login with Google</button>
                <button onClick={channeliOauth} className='button-login-form' style={{backgroundColor: 'cyan',width: '80%', margin: '10px auto'}}>Login with Channel-i</button>

                {/* Register area */}
                <p style={{color: 'grey'}}>Does not have an account?</p>
                <button onClick={() => routeChange('register')} className='button-login-form' style={{backgroundColor: 'grey'}}>Register</button>
            </div>
        </div>
    );
}

export default LoginForm;
