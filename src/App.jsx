import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Category from './category';
import Home from './home';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:categoryName" element={<Category/>}/>
        </Routes>
        </Router>
      );
};

export default App;
