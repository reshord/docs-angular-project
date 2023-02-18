import { createReducer, on, Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { themeChangerAction } from "./theme.actions";

export interface IState {
    darkTheme: boolean
}

const initialState: IState = {
    darkTheme: false
}

const themeReducer = createReducer(
    initialState, 
    on(themeChangerAction, (state) => ({
        darkTheme: !state.darkTheme
    }))
)

export const reducer = (state: IState | undefined, action: Action) => {
    return themeReducer(state, action)
}