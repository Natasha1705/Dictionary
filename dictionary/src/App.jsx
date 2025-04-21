// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AppLayout from './components/AppLayout/AppLayout';
// import WordList from './components/WordList/WordList';
// import words from './data.json';
// import './App.css'

// function App() {
//   return (
//     <AppLayout>
//       <WordList words={words} />
//     </AppLayout>
//   );
// }

// export default App;

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Слова</Link>
//         <Link to="/practice">Практика</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<WordList words={words} />} />
//         <Route path="/practice" element={<Practice />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import WordList from './components/WordList/WordList';
import Practice from './components/Practice/Practice'; // Импортируем компонент Practice
import words from './data.json'
import './App.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <nav>
          <ul>
            <li>
              <Link to="/">Word List</Link>
            </li>
            <li>
              <Link to="/practice">Practice</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WordList words={words} />} />
          <Route path="/practice" element={<Practice words={words} />} /> {/* Добавляем маршрут для Practice */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;