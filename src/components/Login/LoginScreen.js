import React, { useState } from 'react'
import SignInScreen from '../signup/SignInScreen';
import './login.css';
const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
        <div className='login__background'>
            <img className='login__logo' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt=""/>
            <button className='login__button' onClick={() => setSignIn(true)}>Sign In</button>

            <div className='login_gradient'/>
        </div>
        <div className='login__form'>
            {signIn ? (
                <SignInScreen/>
            ) : 
            <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your Email to Create or restart your membership</h3>

            <div className='login__input'>
                <form>
                    {/* <input type="email" placeholder="Email Address"/> */}
                    <button onClick={() => setSignIn(true)} className='login__getStarted'>GET STARTED</button>
                </form>
            </div>
            </>
            }
            
        </div>
    </div>
  )
}

export default LoginScreen