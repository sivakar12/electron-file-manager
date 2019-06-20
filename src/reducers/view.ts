import {
    ViewActions,
    TOGGLE_FAVORITES,
    TOGGLE_PROPERTIES
} from '../types/redux-actions'

import { ViewState } from '../types/redux-state'

const initialState: ViewState = {
    properties: true,
    favorites: true
}

export default function viewReducer(state: ViewState = initialState, 
        action: ViewActions): ViewState {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                favorites: !state.favorites
            }
        case TOGGLE_PROPERTIES:
            return {
                ...state,
                properties: !state.properties
            }
        default:
            return state
    }
}