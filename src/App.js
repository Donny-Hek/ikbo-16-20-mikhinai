import { useState } from 'react';
import './App.css';
import Header from './components/header';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      Выберите имя<br/>
      <Link to='/header'>Mari</Link>
    </div>
  );
}

export default App;
