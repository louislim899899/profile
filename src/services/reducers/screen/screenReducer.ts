import { PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

const intialState = {
    isHomeScreen: true,
}


export function isHomeScreen(state: any = intialState, action: AnyAction) {
    state.isHomeScreen = true   // writing mutable state is allow in createSlice, but normall should write the one like below
    // switch(action.type) {
    //     case "IS_HOME":
    //         return {
    //             ...state, isHomeScreen: true
    //         }
    //     case "NOT_HOME": 
    //         return {
    //             ...state, isHomeScreen: false
    //         }
    //     default:
    //         return state
    // }
}

export function notHomeScreen(state: any, action: AnyAction) {
    state.isHomeScreen = false
}

// export function currentUrl(state: any, action: AnyAction) {
//     state.currenScreen = action.url
// }

export function setCurrentUrl(state: any, action: PayloadAction<String>) {
    state.currentUrl = action.payload
}