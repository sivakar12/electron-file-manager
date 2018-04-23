import { put, select } from 'redux-saga/effects'
import { setContents, changePath } from '../actions'
import { getFiles } from '../../utils'

export function* loadFilesSaga() {
    const state = yield select()
    const files = yield getFiles(state.tabs.tabs[state.tabs.current])
    yield put(setContents(files))
}