import { takeEvery, takeLatest, put, all, select, call } from 'redux-saga/effects'
import { remote } from 'electron'

import {
    LOAD_CONTENTS,
    SET_CONTENTS, 
    OPEN_FOLDER,
    SWITCH_TAB,
    CLOSE_TAB,
    NEW_TAB,
    NEXT_TAB,
    PREVIOUS_TAB,
    SetContentsAction,
    OpenFileAction,
    GO_TO_PARENT_FOLDER,
    CHANGE_PATH,
    OPEN_FILE,
    CLOSE_WINDOW,
    TOGGLE_MAXIMIZE_WINDOW,
    MINIMIZE_WINDOW,
    SetPropertiesAction,
    SET_PROPERTIES,
    SELECT_ITEM
} from '../types/redux-actions'
import { getHomeDirectory, getFolderContents, openFile, getFileDetails } from '../backend'
import { AppState } from '../reducers'
import { handleKeyboardEvents } from './keyboard-shortcuts';
import handleTransfers from './transfers';
import { PropertiesItem } from '../types/core';

function* handleLoadContents() {
    const {tabs}: AppState = yield select()
    const path = tabs.tabs[tabs.current]
    const contents = yield getFolderContents(path)
    const action: SetContentsAction = {
        type: SET_CONTENTS,
        payload: { contents }
    }
    yield put(action)
}

function* handleOpenFolder() {
    yield put({ type: LOAD_CONTENTS })
}

function* handleOpenFile(action: OpenFileAction) {
    yield call(openFile, action.payload.path)
}

function *initialize() {
    yield put({ type: LOAD_CONTENTS })
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

function* loadProperties() {
    const state: AppState = yield select()
    const path = state.selection || state.tabs.tabs[state.tabs.current]
    const properties: PropertiesItem = yield getFileDetails(path)
    const action: SetPropertiesAction = {
        type: SET_PROPERTIES,
        payload: { properties: properties }
    }
    yield put(action)
}
const pathChangingActions = [OPEN_FOLDER, SWITCH_TAB, CLOSE_TAB, NEW_TAB, 
    NEXT_TAB, PREVIOUS_TAB, GO_TO_PARENT_FOLDER, CHANGE_PATH]

    function* setUpActionListeners() {
    yield all([
        takeEvery(LOAD_CONTENTS, handleLoadContents),
        takeEvery(pathChangingActions, handleOpenFolder),
        takeLatest([LOAD_CONTENTS, SELECT_ITEM], loadProperties),
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
        handleKeyboardEvents(),
        handleTransfers()
    ])
}