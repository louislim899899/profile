import { AnyAction } from "redux";

export default function renderHomeScreen(state: any, action: AnyAction) {
    state.isHomeScreen = true
}

export function renderOtherScreen(state: any, action: AnyAction) {
    state.isHomeScreen = false
}