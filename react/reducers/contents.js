import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

const initialState = []

export default function contentsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CONTENTS:
            return action.payload.contents
        case actionTypes.OPEN_FOLDER:
            return []
        case actionTypes.GO_TO_PARENT_FOLDER:
            return []
        default:
            return state
    }
}