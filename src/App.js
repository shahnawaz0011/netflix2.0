import React, { useEffect } from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,
        Routes,
      Route,
  } from "react-router-dom";
import LoginScreen from './components/Login/LoginScreen.js';
import { auth } from './firbase';
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/profileScreen';
import MovieDetails from './components/movieDetails/MovieDetails';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    //check weather user is authenticated or not
    const unsubscribe =  auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        //logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        console.log(userAuth);
      }
      else{
        //logged out
        dispatch(logout());
      }
      return unsubscribe;
    })
  },[dispatch])

  //selecting the user from redux and if the user have value then it will show home screen
  const user = useSelector(selectUser);

  return (
    <div className="App">
        <Router>
          {!user ? (
            <LoginScreen/>
          ) : 
          <Routes>
            <Route exact path='/profile' element={<ProfileScreen/>}/>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path="/movieDetails/:id"  element={<MovieDetails/>} />

            {/* <Route exact path='/movieDetails' element={<MovieDetails/>}/> */}
          </Routes>
          }
        </Router>
    </div>
  );
}

export default App;
