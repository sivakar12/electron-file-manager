import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

const initialState = {
    path: '/',
    filenames: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PATH:
            return { 
                filenames: state.filenames,
                path: action.payload.path
            }
        case actionTypes.SET_FILES_LIST:
            return {
                path: state.path,
                filenames: action.payload.filenames
            }
        case actionTypes.OPEN_FOLDER:
            const { foldername } = action.payload
            const folderExists = state.filenames.indexOf(foldername) >= 0
            const folderIsFolder = true
            if (folderExists && folderIsFolder) {
                return {
                    path: pathModule.join(state.path, foldername),
                    filenames: []
                }
            }
        default:
            return state
    }
}