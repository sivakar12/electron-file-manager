import { delay } from 'redux-saga'
import { takeEvery, put, select } from 'redux-saga/effects'
import pathModule from 'path'

import actionTypes from '../actions/actionTypes'
import { transferComplete, deleteComplete,
    clearSelection, removeCompletedTransfers } from '../actions'
import { move, copy, deletePermenently } from '../../utils'

function* handlePaste(action) {
    const destinationFolder = action.payload.path
    const { stagingArea } = yield select()
    for (let key in stagingArea) {
        const item = stagingArea[key]
        const destinationPath = pathModule.join(destinationFolder,
            pathModule.basename(item.path))
        console.log(`Copying ${item.path} to ${destinationPath}`)
        try {
            if (item.complete) {
                continue
            }
            if (item.cut) {
                yield move(item.path, destinationPath)
            } else {
                yield copy(item.path, destinationPath)
            }
            console.log(`Copying ${item.path} finished`)
            yield put(transferComplete(key))
        } catch (e) {
            console.error(e)
        }
    }
    yield delay(5000)
    yield put(removeCompletedTransfers())
}

function* handleDelete() {
    const state = yield select()
    const path = state.selection
    console.log('Deleting ', path)
    yield deletePermenently(path)
    yield put(deleteComplete())
    yield put(clearSelection())
}
export function* watchFileTransferEvents() {
    yield takeEvery(actionTypes.PASTE_FROM_STAGING_AREA, handlePaste)
    yield takeEvery(actionTypes.DELETE, handleDelete)
}