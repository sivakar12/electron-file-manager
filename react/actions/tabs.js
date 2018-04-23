import actionTypes from './actionTypes'

export function switchTab(index) {
    return {
        type: actionTypes.SWITCH_TAB,
        payload: { index }
    }
}

export function closeTab(index) {
    return {
        type: actionTypes.CLOSE_TAB,
        payload: { index }
    }
}

export function newTab(path = '/') {
    return {
        type: actionTypes.NEW_TAB,
        payload: { path }
    }
}