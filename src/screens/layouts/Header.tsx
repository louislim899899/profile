import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../services/store'
import { menuActions } from '../../services/store/menuSlice'

export default function Header() {
  const dispatch = useDispatch()
  // const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen)

  const toggleMenu = () => {
    dispatch(menuActions.toggleMenu())
  }

  //thunks

  return (
    <header className='absolute h-full left-0 z-50'>
      <button onClick={toggleMenu}><h2 className='font-bold leading-tight text-3xl pt-8 pl-8'>Ls.</h2></button>
      {/* <div>Menu is {isMenuOpen?'open':'close'}</div> */}
      <Navbar/>
    </header>
    
  )
}


// export default class Header extends Component {        
//   render() {
//     return (
//       <header>
//         <Navbar />
//       </header>
//     )
//   }
// }
