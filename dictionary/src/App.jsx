import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import WordList from './components/WordList/WordList';
import Practice from './components/Practice/Practice'; 
import words from './data.json'
import './App.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <nav>
          <ul>
            <li>
              <Link to="/">Список слов</Link>
            </li>
            <li>
              <Link to="/practice">Тренировка</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WordList words={words} />} />
          <Route path="/practice" element={<Practice words={words} />} /> 
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;