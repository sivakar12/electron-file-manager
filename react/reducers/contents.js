import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

import type { Action } from '../actions'
const initialState = []

export default function contentsReducer(state: Array<String> = initialState,
     action: Action) {
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