import { takeEvery, takeLatest, put, all, select, call } from 'redux-saga/effects'
import { remote } from 'electron'

import {
    OpenFileAction,
    OPEN_FILE,
    CLOSE_WINDOW,
    TOGGLE_MAXIMIZE_WINDOW,
    MINIMIZE_WINDOW,
} from '../types/redux-actions'
import { openFile } from '../backend'
import { handleKeyboardEvents } from './keyboard-shortcuts';


function* handleOpenFile(action: OpenFileAction) {
    yield call(openFile, action.payload.path)
}

function *initialize() {
}
function closeWindow() {
    remote.getCurrentWindow().close()
}

function toggleMaximize() {
    const currentWindow = remote.getCurrentWindow()
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize()
    } else {
        currentWindow.maximize()
    }
}

function minimizeWindow() {
    remote.getCurrentWindow().minimize()
}

function* setUpActionListeners() {
    yield all([
        takeEvery(OPEN_FILE, handleOpenFile),
        takeEvery(CLOSE_WINDOW, closeWindow),
        takeEvery(TOGGLE_MAXIMIZE_WINDOW, toggleMaximize),
        takeEvery(MINIMIZE_WINDOW, minimizeWindow)
    ])
}
export default function* rootSaga() {
    yield all([
        initialize(),
        setUpActionListeners(),
        handleKeyboardEvents()
    ])
}