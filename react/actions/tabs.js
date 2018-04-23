import actionTypes from './actionTypes'

export function switchTab(tabIndex) {
    return {
        type: actionTypes.SWITCH_TAB,
        payload: { tabIndex }
    }
}

export function closeTab(tabIndex) {
    return {
        type: actionTypes.CLOSE_TAB,
        payload: { tabIndex }
    }
}

export function newTab(path) {
    return {
        type: actionTypes.NEW_TAB,
        payload: { path }
    }
}