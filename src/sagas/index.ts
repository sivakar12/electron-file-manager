import { takeEvery, takeLatest, put, all, select, call } from 'redux-saga/effects'
import { remote } from 'electron'

import {
    OPEN_FOLDER,
    SWITCH_TAB,
    CLOSE_TAB,
    NEW_TAB,
    NEXT_TAB,
    PREVIOUS_TAB,
    OpenFileAction,
    GO_TO_PARENT_FOLDER,
    CHANGE_PATH,
    OPEN_FILE,
    CLOSE_WINDOW,
    TOGGLE_MAXIMIZE_WINDOW,
    MINIMIZE_WINDOW,
    SetPropertiesAction,
    SET_PROPERTIES,
    SELECT_ITEM,
    TOGGLE_PROPERTIES
} from '../types/redux-actions'
import { getHomeDirectory, getFolderContents, openFile, getFileDetails } from '../backend'
import { AppState } from '../reducers'
import { handleKeyboardEvents } from './keyboard-shortcuts';
import { PropertiesItem } from '../types/core';
import { loadProperties } from './properties';

function* handleOpenFolder() {
}

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


const pathChangingActions = [OPEN_FOLDER, SWITCH_TAB, CLOSE_TAB, NEW_TAB, 
    NEXT_TAB, PREVIOUS_TAB, GO_TO_PARENT_FOLDER, CHANGE_PATH]

function* setUpActionListeners() {
    yield all([
        takeEvery(pathChangingActions, handleOpenFolder),
        takeLatest([SELECT_ITEM, TOGGLE_PROPERTIES], loadProperties),
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