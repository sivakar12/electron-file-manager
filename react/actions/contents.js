import actionTypes from './actionTypes'

export function changePath(path) {
    return {
        type: actionTypes.CHANGE_PATH,
        payload: { path }
    }
}

export type ChangePathAction = {
    type: string,
    payload: { path: string }
}

export function setContents(contents) {
    return {
        type: actionTypes.SET_CONTENTS,
        payload: { contents }
    }
}

export type SetContentsAction = {
    type: string,
    payload: {
        contents: {
            name: string
        }
    }
}

export function openFolder(foldername) {
    return {
        type: actionTypes.OPEN_FOLDER,
        payload: { foldername }
    }
}

export type OpenFolderAction = {
    type: string,
    payload: { foldername: string }
}

export function openFile(filename) {
    return {
        type: actionTypes.OPEN_FILE,
        payload: { filename }
    }
}

export type openFileAction = {
    type: string,
    payload: { filename: strint }
}

export function goToParentFolder() {
    return {
        type: actionTypes.GO_TO_PARENT_FOLDER
    }
}

export type GoToParentFolderAction = {
    type: string
}