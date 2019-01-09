import actionTypes from './actionTypes'

export function changePath(path) {
    return {
        type: actionTypes.CHANGE_PATH,
        payload: { path }
    }
}

export function setContents(contents) {
    return {
        type: actionTypes.SET_CONTENTS,
        payload: { contents }
    }
}

export function openFolder(foldername) {
    return {
        type: actionTypes.OPEN_FOLDER,
        payload: { foldername }
    }
}

export function openFile(filename) {
    return {
        type: actionTypes.OPEN_FILE,
        payload: { filename }
    }
}

export function goToParentFolder() {
    return {
        type: actionTypes.GO_TO_PARENT_FOLDER
    }
}