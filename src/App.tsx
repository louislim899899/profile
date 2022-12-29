import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './screens/layouts/Header';
import Profile from './screens/HomeScreen';

function App() {
  return (
    <div className="App bg-[#212025]">
      <div className='container'>
        <header className="App-header">
          <Header />
        </header>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
