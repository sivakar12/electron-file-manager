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

export function addFavorite(path) {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload: { path }
    }
}

export function removeFavorite(hash) {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        payload: { hash }
    }
}

export function renameFavorite(hash, newName) {
    return {
        type: actionTypes.RENAME_FAVORITE,
        payload: { hash, newName }
    }
}