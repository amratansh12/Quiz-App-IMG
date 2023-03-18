import React from 'react';
import './LogOutMessage.css';
import { auth } from '../../config/firebase.js';

const LogOutMessage = () => {
  return (
    <div>
      <div className="container container-logout">
            <h2 className='logOutMess'>Thank You {auth.currentUser.displayName}</h2>   
            <h2 id="successOut" className='logOutMess'>You are successfully logged out</h2>   
            <a id="revisit" href="/">Login Again</a>
        </div>
    </div>
  )
}

export default LogOutMessage
