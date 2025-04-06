import React from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import WordList from './components/WordList/WordList';
import words from './data.json';
import './App.css'

function App() {
  return (
    <AppLayout>
      <WordList words={words} />
    </AppLayout>
  );
}

export default App;
