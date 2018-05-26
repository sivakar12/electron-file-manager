import { put, select, takeEvery } from 'redux-saga/effects'
import pathModule from 'path'

import actionTypes from '../actions/actionTypes'
import { setContents, changePath } from '../actions'
import { getFiles, openFile } from '../../utils'

export function* watchContentsEvents() {
    yield takeEvery(actionTypes.CHANGE_PATH, loadFilesSaga)
    yield takeEvery(actionTypes.OPEN_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.GO_TO_PARENT_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.CLOSE_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.NEW_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.SWITCH_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.PREVIOUS_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.NEXT_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.OPEN_FILE, openFileSaga)
    yield takeEvery(actionTypes.TRANSFER_COMPLETE, loadFilesSaga)
    yield takeEvery(actionTypes.DELETE_COMPLETE, loadFilesSaga)
}

function* openFileSaga(action) {
    const { filename } = action.payload
    const state = yield select()
    const folder = state.tabs.tabs[state.tabs.current]
    const filePath = pathModule.join(folder, filename)
    try {
        yield openFile(filePath)
    } catch (e) {
        console.log('Error opening file')
    }

}
function* loadFilesSaga() {
    const state = yield select()
    const files = yield getFiles(state.tabs.tabs[state.tabs.current])
    yield put(setContents(files))
}