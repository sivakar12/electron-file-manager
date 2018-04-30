import { put, select, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { setContents, changePath } from '../actions'
import { getFiles } from '../../utils'

export function* watchPathChanges() {
    yield takeEvery(actionTypes.CHANGE_PATH, loadFilesSaga)
    yield takeEvery(actionTypes.OPEN_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.GO_TO_PARENT_FOLDER, loadFilesSaga)
    yield takeEvery(actionTypes.CLOSE_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.NEW_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.SWITCH_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.PREVIOUS_TAB, loadFilesSaga)
    yield takeEvery(actionTypes.NEXT_TAB, loadFilesSaga)    
}

function* loadFilesSaga() {
    const state = yield select()
    const files = yield getFiles(state.tabs.tabs[state.tabs.current])
    yield put(setContents(files))
}