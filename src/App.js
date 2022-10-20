import React from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,
        Routes,
      Route,
    Link
  } from "react-router-dom";
import Login from './components/Login/Login.js';

function App() {

  const user = null;
  return (
    <div className="App">
        <Router>
          {!user ? (
            <Login/>
          ) : 
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
          }
        </Router>
    </div>
  );
}

export default App;
