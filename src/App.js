import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input value={value} onChange={(e) => setValue(e.target.value)} />

      </header>
    </div>
  );
}

export default App;
