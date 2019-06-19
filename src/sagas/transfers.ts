import fs from 'fs'
import { all, takeEvery, select, call, put, delay } from 'redux-saga/effects'
import { PASTE_FROM_STAGING_AREA, PasteFromStagingAreaAction, UpdateTransferProgressAction, UPDATE_TRANSFER_PROGRESS } from '../types/redux-actions';
import { Path, TransferItem } from '../types/core';
import { AppState } from '../reducers';
import { getFileDetails } from '../backend';


function* handleOnePaste(transferItem: TransferItem) {
    const fileDetails: fs.Stats  = yield call(getFileDetails, transferItem.path)
    if (fileDetails.isDirectory()) {
        const errorAction: UpdateTransferProgressAction = {
            type: UPDATE_TRANSFER_PROGRESS,
            payload: {
                ...transferItem,
                state: 'error'
            }
        }
        yield put(errorAction)
        return
    }
    const startedAction: UpdateTransferProgressAction = {
        type: UPDATE_TRANSFER_PROGRESS,
        payload: {
            ...transferItem,
            state: 'started',
            totalBytes: fileDetails.size,
            bytesDone: 0
        }
    }
    yield put(startedAction)
    yield delay(4000)
    const finishedAction: UpdateTransferProgressAction = {
        type: UPDATE_TRANSFER_PROGRESS,
        payload: {
            ...transferItem,
            state: 'finished'
        }
    }
    yield put(finishedAction)
}
function* handlePaste(action: PasteFromStagingAreaAction) {
    const state: AppState = yield select()
    const destionation: Path = state.tabs.tabs[state.tabs.current]
    const transfers: TransferItem[] = Object.values(state.transfers)

    for (let transfer of transfers) {
        yield handleOnePaste(transfer)
    }

}

export default function* handleTransfers() {
    yield all([
        takeEvery(PASTE_FROM_STAGING_AREA, handlePaste)
    ])
}