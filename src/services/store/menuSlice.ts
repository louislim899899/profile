import { createSlice } from "@reduxjs/toolkit";
import toggleMenu from '../reducers/menu/toggleMenu'
import hideMenu from '../reducers/menu/hideMenu'

const menuSlice = createSlice({
    name: 'menu',
    initialState: { isMenuOpen: false }, // can add multiple initial state variable
    reducers: { // can add multiple function
        toggleMenu,
        hideMenu
    }
})

// const openMenu = (dispatch, getState) => {
//     return (dispatch: any) => {
//         dispatch(menuActions.toggleMenu())
//     }
// }

// const toggleMenu = (isMenuOpen: boolean) => {
//     return (dispatch: any) => {
//         dispatch(menuActions.toggleMenu())

         
//     }
//     try await toggleMenu()
// }

export const menuActions = menuSlice.actions;
export default menuSlice