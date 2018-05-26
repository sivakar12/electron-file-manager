import actionTypes from '../actions/actionTypes'

const initialState = {
    properties: false,
    favorites: true
}

export default function viewReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_FAVORITES:
            return Object.assign({}, state, 
                { favorites: !state.favorites })
        case actionTypes.TOGGLE_PROPERTIES:
            return Object.assign({}, state, 
                { properties: !state.properties })
        default:
            return state
    }
}