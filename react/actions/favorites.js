import actionTypes from './actionTypes'

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

export function loadFavorites(favorites) {
    return {
        type: actionTypes.LOAD_FAVORITES,
        payload: favorites
    }
}
