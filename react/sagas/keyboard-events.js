import { takeEvery, select, put } from 'redux-saga/effects'

import actionTypes from '../actions/actionTypes'
import { 
    copyToStagingArea, 
    cutToStagingArea,
    pasteFromStagingArea
}from '../actions'

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

function* handleCtrlV() {
    const { tabs } = yield select()
    const currentPath = tabs.tabs[tabs.current]
    yield put(pasteFromStagingArea(currentPath))
}

export function* watchKeyboardEvents() {
    yield takeEvery(actionTypes.CTRL_C, handleCtrlC)
    yield takeEvery(actionTypes.CTRL_X, handleCtrlX)
    yield takeEvery(actionTypes.CTRL_V, handleCtrlV)
}