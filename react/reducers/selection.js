import actionTypes from '../actions/actionTypes'

const initialState = null
export default function selectionReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_ITEM:
            if (state == action.payload.path) return null
            return action.payload.path
        case actionTypes.CLEAR_SELECTION:
            return null
        case actionTypes.OPEN_FOLDER:
            return null
        case actionTypes.GO_TO_PARENT_FOLDER:
            return null
        default:
            return state
    }
}