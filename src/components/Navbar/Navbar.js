import React from 'react';
import { auth } from '../../config/firebase.js';
import { signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = ({routeChange, isSignedIn}) => {

    const logOut = async () => {
        try{
            await signOut(auth);
            console.log('successfully logged-out');
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="header">
            <div className="heading">
                <h2>The Skirmish</h2><h1>Interrogation</h1>
            </div>
            <div className="buttons">
                {
                    isSignedIn === false
                    ?
                        <>
                            <button onClick={() => routeChange('login')} className='button-gen' id="login">Login</button>
                            <button onClick={() => routeChange('register')} className='button-gen' id="register">Register</button>
                        </>
                    :
                        <>
                            <button onClick={() => {
                                logOut();
                                routeChange('logout');
                                document.getElementById('logout-btn').style.display= 'none';
                                document.getElementById('home-btn').style.display= 'none';
                                document.getElementById('userProfile').style.display= 'none';
                            }} className='button-gen' id="logout-btn">Logout</button>
                            <button onClick={() => routeChange('quizLogin')} id="home-btn" className='button-gen'>Home</button>
                            <div id='userProfile'>
                                <p>{auth.currentUser.displayName}</p>
                                <p style={{color: 'whitesmoke'}}>( {auth.currentUser.email} )</p>
                                <img src={auth.currentUser.photoURL} alt="user"/>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

export default Navbar;
