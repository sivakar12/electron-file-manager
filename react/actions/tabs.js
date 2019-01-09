import actionTypes from './actionTypes'
import { getHomeFolder } from '../../utils'
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

export function newTab(path = getHomeFolder()) {
    return {
        type: actionTypes.NEW_TAB,
        payload: { path }
    }
}