import React from 'react'
import './LoginSignup.css' 
import email_icon from '../Assets/email.png' 
import user_icon from '../Assets/user.png' 
import password_icon from '../Assets/padlock.png'  
import { useState } from 'react'


export const LoginSignup = () => {

    const [action, setAction] = useState('Login')


  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                {action} 
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? 
            <div></div> : 
            <div className="input">
                <img src={user_icon} alt=''/>
                <input type="text" placeholder='Your name...'/>
            </div>
            }
            
            <div className="input">
                <img src={email_icon} alt=''/>
                <input type="email" placeholder='Your email...'/>
            </div>
            <div className="input">
                <img src={password_icon} alt=''/>
                <input type="password" placeholder='Your password...'/>
            </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
                setAction("Login")
            }}>Login</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {
                setAction("Sign Up")
            }}>Sign Up</div>
        </div>
    </div>
  )
}
