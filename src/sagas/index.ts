import { takeEvery, put, all, select, call } from 'redux-saga/effects'

import {
    LOAD_CONTENTS,
    SET_CONTENTS, 
    OPEN_FOLDER,
    SWITCH_TAB,
    CLOSE_TAB,
    NEW_TAB,
    SetContentsAction,
    OpenFileAction,
    GO_TO_PARENT_FOLDER,
    CHANGE_PATH,
    OPEN_FILE
} from '../types/redux-actions'
import { getHomeDirectory, getFolderContents, openFile } from '../backend'
import { AppState } from '../reducers'

function* handleLoadContents() {
    try {
        const {tabs}: AppState = yield select()
        const path = tabs.tabs[tabs.current]
        const contents = yield getFolderContents(path)
        const action: SetContentsAction = {
            type: SET_CONTENTS,
            payload: { contents }
        }
        yield put(action)
    } catch (e) {
        console.error(e)
    }
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

function* setUpActionListeners() {
    yield all([
        takeEvery(LOAD_CONTENTS, handleLoadContents),
        takeEvery([OPEN_FOLDER, SWITCH_TAB, CLOSE_TAB, NEW_TAB, GO_TO_PARENT_FOLDER, CHANGE_PATH], handleOpenFolder),
        takeEvery(OPEN_FILE, handleOpenFile)
    ])
}
export default function* rootSaga() {
    yield all([
        initialize(),
        setUpActionListeners()
    ])
}