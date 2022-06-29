import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import Predictor from './Predictor'
import Login from './Login'
import Landing from './Landing'
import Floor from './Floor'

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/floor" element={<Floor/>}/>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/predictor" element={<Predictor/>}/>
        </Routes>

    </Router>
  );
}

export default App;
