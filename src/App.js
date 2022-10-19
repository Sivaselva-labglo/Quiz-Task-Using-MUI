import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Quiz from './quiz';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<LoginPage/>} />
            <Route exact path='/:home' element={ <Quiz/> }/>
        </Routes>
    </Router>
  );
}

export default App;
