import React, { useState } from 'react';
import {auth, googleProvider} from '../../config/firebase.js';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Register = ({routeChange, onSignStateChange}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signIn = async () => {
        try{
            if(password === confirmPassword){
                await createUserWithEmailAndPassword(auth, email, password);
                routeChange('quizLogin');
                onSignStateChange("true");
            }
            else{
                routeChange('register');
                throw new Error("Passwords do not match");
            }
        }catch(error){
            routeChange('register');
            alert(error.message);
        }
    };

    
    return (
        <div className="container regForm">
            <h2>Register</h2>   
            <div className="inputs">
                <label htmlFor="emailId">Email</label>
                <input type="email" name="emailId" id="emailId" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="newPassword">Password</label>
                <input type="password" name="newPassword" id="newPassword" onChange={(e) => setPassword(e.target.value)}/>
                <p style={{color: '#fa7676',fontSize: '15px', marginBottom: '15px'}}>Passwords should be atleast 6 characters long</p>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button onClick={() => {
                    signIn();
                }} className='button-gen buttonRegister' style={{margin: '10px auto'}}>Register</button>
            </div>
        </div>  
    );
}

export default Register;
