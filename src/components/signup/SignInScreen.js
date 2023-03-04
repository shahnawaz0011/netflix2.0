import React, { useRef, useState } from 'react'
import { auth } from '../../firbase';
import './SignupScreen.css';

function SignInScreen() {

  const [invalidLoginPassword , setInvalidLoginPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = (e) =>{
    debugger;
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log('sign In details',authUser);
    }).catch((error)=>{
      setInvalidLoginPassword(true);
    })


  }

  const handleRegister = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) =>{
      alert(error.message)
    })
  }
  return (
    <div className='signupScreen'>
      {invalidLoginPassword && <div style={{color:'red'}}>
        Please give a valid Email and Password
      </div>}
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email" />
        <input ref={passwordRef} placeholder='Password' type="password" />
        <button type="submit" onClick={ handleSignUp}>Sign In</button>
        <h4>
          <span className='signupScreen__new'>New to Netflix? </span>
          <span className='signupScreen__link'  onClick={handleRegister}>Sign Up now</span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen