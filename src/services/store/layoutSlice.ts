import { AnyAction, createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: 'layout',
    initialState: { width: "100%", opacity: "1", notHomePage: false }, // can add multiple initial state variable
    reducers: { // can add multiple function
        shrinkLayout(state: any, action: AnyAction) {
            state.notHomePage = true
            state.width = 0
            state.opacity = 0
        },
        expandLayout(state: any, action: AnyAction) {
            state.notHomePage = false
            state.width = 0
            state.opacity = 0
        }
    }
})

export const layoutActions = layoutSlice.actions;
export default layoutSlice