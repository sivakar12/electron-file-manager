import { put, select } from 'redux-saga/effects'
import { setFilesList, changePath } from '../actions'
import { getFiles } from '../../utils'

export function* loadFilesSaga() {
    const state = yield select()
    console.log(state)
    const files = yield getFiles(state.path)
    yield put(setFilesList(files))
}