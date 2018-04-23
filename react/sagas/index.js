import { takeEvery, put, all } from 'redux-saga/effects'

import actionTypes from '../actions/actionTypes'
import { changePath, setFilesList } from '../actions'
import { 
    loadFilesSaga
 } from './fs'
import { storeStateInFile, loadStateFromFile } from './saved-states'

export default function* rootSaga() {
    console.log('Root saga is running...')
    yield all([
        watchPathChangeSaga(),
        setInitialPath(),
        loadStateFromFile()
    ])
}

function* setInitialPath() {
    yield put(changePath('/'))
}
function* watchPathChangeSaga() {
    yield takeEvery(actionTypes.CHANGE_PATH, loadFilesSaga)
    yield takeEvery(actionTypes.OPEN_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.GO_TO_PARENT_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.ADD_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.RENAME_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.REMOVE_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.LOAD_STATE_FROM_FILE, loadStateFromFile)
    yield takeEvery(actionTypes.STORE_STATE_IN_FILE, storeStateInFile)
}
