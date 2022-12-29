import {configureStore} from '@reduxjs/toolkit'
import layoutSlice from './layoutSlice'
import menuSlice from './menuSlice'
// import { combineReducers } from '@reduxjs/toolkit'


// const rootReducer = combineReducers({})




const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        layout: layoutSlice.reducer
    },
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

