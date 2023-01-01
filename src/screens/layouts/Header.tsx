import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import { useDispatch } from 'react-redux'
import { menuActions } from '../../services/store/menuSlice'

export default function Header() {
  const dispatch = useDispatch()

  const toggleMenu = () => {
    dispatch(menuActions.toggleMenu())
  }

  //thunks

  return (
    <header className='absolute h-full left-0 z-50'>
      <button onClick={toggleMenu}><h2 className='font-bold leading-tight text-3xl pt-8 pl-8'>Ls.</h2></button>
      <Navbar/>
    </header>
    
  )
}
