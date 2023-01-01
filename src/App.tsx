import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from '@/screens/layouts/Header';
import Profile from '@/screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-[#212025]">
      <div className='container'>
        <header className="App-header">
          <Header />
        </header>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile/>}/>
        </Routes>
        <Profile/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
