import { takeEvery, put, all } from 'redux-saga/effects'

import actionTypes from '../actions/actionTypes'
import { changePath, setFilesList } from '../actions'
import { 
    loadFilesSaga
 } from './fs'

export default function* rootSaga() {
    console.log('Root saga is running...')
    yield all([
        watchPathChangeSaga(),
        setInitialPath()
    ])
}

function* setInitialPath() {
    yield put(changePath('/'))
}
function* watchPathChangeSaga() {
    yield takeEvery(actionTypes.CHANGE_PATH, loadFilesSaga)
    yield takeEvery(actionTypes.OPEN_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.GO_TO_PARENT_FOLDER, loadFilesSaga)
}
