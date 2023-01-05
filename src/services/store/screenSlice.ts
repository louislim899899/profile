import { createSlice } from "@reduxjs/toolkit";
import { isHomeScreen, notHomeScreen, setCurrentUrl } from "@/services/reducers/screen/screenReducer"

const screenSlice = createSlice({
    name: 'screen',
    initialState: { isHomeScreen: true, currentUrl: "/" }, // can add multiple initial state variable
    reducers: { // can add multiple function
        isHomeScreen,
        notHomeScreen,
        setCurrentUrl
    }
})

export const screenActions = screenSlice.actions;
export default screenSlice