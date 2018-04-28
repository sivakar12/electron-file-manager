import { remote } from 'electron'
import { takeEvery, put, all } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { changePath, setContents } from '../actions'
import { 
    loadFilesSaga
 } from './fs'
import { storeStateInFile, loadStateFromFile } from './saved-states'

export default function* rootSaga() {
    console.log('Root saga is running...')
    yield all([
        startActionWatchers(),
        setInitialPath(),
        loadStateFromFile()
    ])
}

function* setInitialPath() {
    yield put(changePath('/'))
}

function* closeWindow() {
    remote.getCurrentWindow().close()
}
function* startActionWatchers() {
    yield takeEvery(actionTypes.CHANGE_PATH, loadFilesSaga)
    yield takeEvery(actionTypes.OPEN_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.GO_TO_PARENT_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.CLOSE_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.NEW_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.SWITCH_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.ADD_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.RENAME_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.REMOVE_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.LOAD_STATE_FROM_FILE, loadStateFromFile)
    yield takeEvery(actionTypes.STORE_STATE_IN_FILE, storeStateInFile)
    yield takeEvery(actionTypes.CLOSE_WINDOW, closeWindow)
}
