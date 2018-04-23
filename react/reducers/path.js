import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

const initialState = '/'

export default function pathReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PATH:
            return action.payload.path
        case actionTypes.OPEN_FOLDER:
            const { foldername } = action.payload
            return  pathModule.join(state, foldername)
        case actionTypes.GO_TO_PARENT_FOLDER:
            const parentFolder = pathModule.dirname(state)
            return parentFolder
        default:
            return state
    }
}