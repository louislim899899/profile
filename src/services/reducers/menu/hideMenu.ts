import { AnyAction } from "redux";

export default function toggleMenu(state: any, action: AnyAction) {
    state.isMenuOpen = false
}