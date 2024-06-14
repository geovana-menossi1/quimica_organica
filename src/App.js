import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Quiz from './pages/Quiz';
import Compostos from './pages/Compostos';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/compostos" element={<Compostos />} />
      </Routes>
    </div>
  </Router>
);

export default App;
