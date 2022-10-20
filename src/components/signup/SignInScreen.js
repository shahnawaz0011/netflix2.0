import React, { useRef } from 'react'
import { auth } from '../../firbase';
import './SignupScreen.css';

function SignInScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = (e) =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log('sign In details',authUser);
    }).catch((error)=>{
      alert(error.message);
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