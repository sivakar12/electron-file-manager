import { remote } from 'electron'
import { takeEvery } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'

export function* watchWindowButtonEvents() {
    yield takeEvery(actionTypes.CLOSE_WINDOW, closeWindow)
}

function* closeWindow() {
    remote.getCurrentWindow().close()
}