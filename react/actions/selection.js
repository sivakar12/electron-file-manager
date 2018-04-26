import actionTypes from './actionTypes'

export function selectItem(path) {
    return {
        type: actionTypes.SELECT_ITEM,
        payload: { path }
    }
}

export function clearSelection() {
    return {
        type: actionTypes.CLEAR_SELECTION
    }
}