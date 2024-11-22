import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Home from "./pages/Home";
import Me from "./pages/Me";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/me" element={<Me />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
