import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './ts/layouts/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header font-bold underline">
        <Menu/>
      </header>
    </div>
  );
}

export default App;
