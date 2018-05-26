import { takeEvery, put, select } from 'redux-saga/effects'
import pathModule from 'path'

import actionTypes from '../actions/actionTypes'
import { transferComplete } from '../actions'
import { copy } from '../../utils'

function* handlePaste(action) {
    const destinationFolder = action.payload.path
    const { stagingArea } = yield select()
    for (let key in stagingArea) {
        const item = stagingArea[key]
        const destinationPath = pathModule.join(destinationFolder,
            pathModule.basename(item.path))
        console.log(`Copying ${item.path} to ${destinationPath}`)
        try {
            yield copy(item.path, destinationPath)
            console.log(`Copying ${item.path} finished`)
            yield put(transferComplete(key))
        } catch (e) {
            console.error(e)
        }
    }
}

function* handleDelete() {
    const state = yield select()
    const path = state.selection
    console.log('Deleting ', path)
}
export function* watchFileTransferEvents() {
    yield takeEvery(actionTypes.PASTE_FROM_STAGING_AREA, handlePaste)
    yield takeEvery(actionTypes.DELETE, handleDelete)
}