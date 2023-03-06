import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './assets/styles/main.module.scss'
import Header from './screens/layouts/Header';
import Body from './screens/layouts/Body';

function App() {
  return (
    <div className="App bg-[#212025] h-screen">
      <div className='container'>
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Body />
        </main>
      </div>
    </div>
  );
}

export default App;
