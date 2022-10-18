import React from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,
        Routes,
      Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
