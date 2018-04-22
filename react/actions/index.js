import actionTypes from './actionTypes'

export function changePath(path) {
    return {
        type: actionTypes.CHANGE_PATH,
        payload: { path }
    }
}

export function setFilesList(filenames) {
    return {
        type: actionTypes.SET_FILES_LIST,
        payload: { filenames }
    }
}

export function openFolder(foldername) {
    return {
        type: actionTypes.OPEN_FOLDER,
        payload: { foldername }
    }
}

export function goToParentFolder() {
    return {
        type: actionTypes.GO_TO_PARENT_FOLDER
    }
}