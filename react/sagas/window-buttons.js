import { remote } from 'electron'
import { takeEvery } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'

export function* watchWindowButtonEvents() {
    yield takeEvery(actionTypes.CLOSE_WINDOW, closeWindow)
    yield takeEvery(actionTypes.TOGGLE_MAXIMIZE_WINDOW, toggleMaximize)
    yield takeEvery(actionTypes.MINIMIZE_WINDOW, minimizeWindow)
}

function* closeWindow() {
    remote.getCurrentWindow().close()
}

function* toggleMaximize() {
    const currentWindow = remote.getCurrentWindow()
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize()
    } else {
        currentWindow.maximize()
    }
}

function* minimizeWindow() {
    remote.getCurrentWindow().minimize()
}