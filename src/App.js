import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const test = useSelector(state => state)
  console.log('state', test)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
