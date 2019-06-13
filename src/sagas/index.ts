import { takeEvery, put, all, select } from 'redux-saga/effects'

import {
    LOAD_CONTENTS,
    SET_CONTENTS, 
    OPEN_FOLDER,
    SWITCH_TAB,
    CLOSE_TAB,
    NEW_TAB,
    SetContentsAction
} from '../types/redux-actions'
import { getHomeDirectory, getFolderContents } from '../backend'
import { AppState } from '../reducers'

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

function *initialize() {
    yield put({ type: LOAD_CONTENTS })
}

function* setUpActionListeners() {
    yield all([
        takeEvery(LOAD_CONTENTS, handleLoadContents),
        takeEvery([OPEN_FOLDER, SWITCH_TAB, CLOSE_TAB, NEW_TAB], handleOpenFolder)
    ])
}
export default function* rootSaga() {
    yield all([
        initialize(),
        setUpActionListeners()
    ])
}