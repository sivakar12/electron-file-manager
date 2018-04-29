import { takeEvery, select, put } from 'redux-saga/effects'

import actionTypes from '../actions/actionTypes'
import { copyToStagingArea, cutToStagingArea }from '../actions'

function* handleCtrlC() {
    const state = yield select()
    const selectedPath = state.selection
    if (selectedPath) {
        yield put(copyToStagingArea(selectedPath))
    }
}

function* handleCtrlX() {
    const { selection } = yield select()
    if (selection) {
        yield put(cutToStagingArea(selection))
    }
}

export function* watchKeyboardEvents() {
    yield takeEvery(actionTypes.CTRL_C, handleCtrlC)
    yield takeEvery(actionTypes.CTRL_X, handleCtrlX)
}