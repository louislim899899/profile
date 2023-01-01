import { AnyAction, createSlice } from "@reduxjs/toolkit";
import renderHomeScreen from "@/services/reducers/screen/screenReducer"

const screenSlice = createSlice({
    name: 'screen',
    initialState: { isHomePage: true }, // can add multiple initial state variable
    reducers: { // can add multiple function
        renderHomeScreen
    }
})

export const screenActions = screenSlice.actions;
export default screenSlice