import { takeEvery, put, select } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { transferComplete } from '../actions'
function* handlePaste(action) {
    const destinationPath = action.payload.path
    const { stagingArea } = yield select()
    stagingArea.forEach((v, k) => {
        console.log(`Copying ${v.path} to ${destinationPath}`)
    })
}

export function* watchFileTransferEvents() {
    yield takeEvery(actionTypes.PASTE_FROM_STAGING_AREA, handlePaste)
}