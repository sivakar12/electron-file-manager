import {
    ViewActions,
    TOGGLE_FAVORITES,
    TOGGLE_PROPERTIES,
    CHANGE_VIEW
} from '../types/redux-actions'

import { ViewState } from '../types/redux-state'

const initialState: ViewState = {
    properties: true,
    favorites: false,
    view: 'grid'
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
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.payload.view
            }
        default:
            return state
    }
}