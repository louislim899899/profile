import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/services/store'
import { menuActions } from '@/services/store/menuSlice'
import { screenActions } from '@/services/store/screenSlice'
import useClickOutsideHandler from '@/hooks/useClickOutsideHandler'
import { MenuItem } from './MenuItem'
import { Link } from 'react-router-dom'
import { transitionActions } from '@/services/store/transitionSlice'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

export default function Navbar() {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen)
  const dispatch = useDispatch()

  const menuRef = useRef<HTMLDivElement>(null);

  // const toggleLayout = () => {
  //   dispatch(menuActions.hideMenu())
  // }
  const changeScreen = (e:any) => {
    dispatch(menuActions.hideMenu())

    e.target.getAttribute("href") === "/" ? 
    dispatch(screenActions.isHomeScreen()) : dispatch(screenActions.notHomeScreen())

    dispatch(transitionActions.changeTransition("FADE_OUT"))
  }


  useClickOutsideHandler(menuRef, menuActions.hideMenu())

  return (
    // <div className='w-8 bg-black h-full w-full absolute top-0 p-4 left-0 ${isMenuOpen ? }'>
    <div ref={menuRef as React.RefObject<HTMLDivElement>} className={"btn-group pull-right pl-4 min-w-max bg-black absolute top-0 h-full w-56 transition-all ease-in-out duration-300 grid grid-rows-6 " + (isMenuOpen ? 'left-0' : '-left-56')}>
      <h2 className='font-bold leading-tight text-3xl pt-8 mb-5 row-span-1'>Ls.</h2>
      <div className='row-span-4'>
        {/* <button className="block py-2 text-xl" onClick={toggleLayout}>Home</button>
        <button className="block py-2 text-xl" onClick={toggleLayout}>Projects</button>
        <button className="block py-2 text-xl" onClick={toggleLayout}>Contact</button> */}
        {MenuItem.map((item,index) => (
          <Link to={item.url} key={index} className="block py-2 text-xl" onClick={changeScreen}>{item.title}</Link>
        ))}
      </div>
      <div className='row-span-1 flex items-end pb-3'>
        <>
        <p className="text-s">Louis © {getCurrentYear()}</p>
        </>
      </div>
    </div>
  )
}


// export default class Navbar extends Component {
//     constructor(props: any) {
//         super(props)
//     }

    

//     reducer(state: any, action: any) {
//         switch (action) {
//             case "NAVBAR_OPEN":
//                 return navbarOpen = true
//             case "NAVBAR_CLOSE":
//                 return navbarOpen = false
//             default:
//                 navbarOpen = false
//         }
//     }

//   render() {
//     return (
//       <nav data-itemID='nav'>
//         <button data-itemID='hamburger'>{navbarOpen ? "open" : "close"}</button>
//         <ul>
//             {/* {MenuItem.map((item, index) => {
//                 return item
//             })} */}
//         </ul>
//       </nav>
//     )
//   }
// }

