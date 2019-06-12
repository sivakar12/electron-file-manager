import { takeEvery, put, all } from 'redux-saga/effects'

import {
    LOAD_CONTENTS,
    SET_CONTENTS, 
    SetContentsAction
} from '../types/redux-actions'
import { getHomeDirectory, getFolderContents } from '../backend'

function* handleLoadContents() {
    const contents = yield getFolderContents(getHomeDirectory())
    const action: SetContentsAction = {
        type: SET_CONTENTS,
        payload: { contents }
    }
    yield put(action)
}

function *initialize() {
    yield put({ type: LOAD_CONTENTS })
}

function* setUpActionListeners() {
    yield takeEvery(LOAD_CONTENTS, handleLoadContents)
}
export default function* rootSaga() {
    yield all([
        initialize(),
        setUpActionListeners()
    ])
}