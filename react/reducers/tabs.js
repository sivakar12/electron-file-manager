import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

const initialState = {
    path: '/',
    filenames: []
}

export default function tabs(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PATH:
            return Object.assign({}, state, { 
                path: action.payload.path
            })
        case actionTypes.SET_FILES_LIST:
            return Object.assign({}, state, {
                filenames: action.payload.filenames
            })
        case actionTypes.OPEN_FOLDER:
            const { foldername } = action.payload
            const folderExists = state.filenames.indexOf(foldername) >= 0
            const folderIsFolder = true
            if (folderExists && folderIsFolder) {
                return Object.assign({}, state, {
                    path: pathModule.join(state.path, foldername),
                    filenames: []
                })
            }
        case actionTypes.GO_TO_PARENT_FOLDER:
            const parentFolder = pathModule.dirname(state.path)
            return Object.assign({}, state, {
                path: parentFolder
            })
        default:
            return state
    }
}