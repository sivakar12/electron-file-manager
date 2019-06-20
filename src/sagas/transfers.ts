import fs from 'fs'
import pathModule from 'path'
import { all, takeEvery, select, call, put, delay } from 'redux-saga/effects'
import { Observable } from 'rxjs'

import { PASTE_FROM_STAGING_AREA, PasteFromStagingAreaAction, UpdateTransferProgressAction, UPDATE_TRANSFER_PROGRESS, LOAD_CONTENTS } from '../types/redux-actions';
import { Path, TransferItem } from '../types/core';
import { AppState } from '../reducers';
import { getFileDetails, copyFile } from '../backend';
import { channelFromObservable } from './helpers';

function* handleOnePaste(transferItem: TransferItem, destionation: Path) {
    const fileDetails: fs.Stats  = yield call(getFileDetails, transferItem.path)

    // throw error for directory copy
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
    
    const copyProgress: Observable<number> = copyFile(transferItem.path, destionation)
    yield channelFromObservable(
        copyProgress,
        function* (bytesRead: number) {
            const updateAction: UpdateTransferProgressAction = {
                type: UPDATE_TRANSFER_PROGRESS,
                payload: {
                    ...transferItem,
                    state: 'started',
                    bytesDone: bytesRead
                }
            }
            yield put(updateAction)
        },
        function* (error: any) {
            const errorAction: UpdateTransferProgressAction = {
                type: UPDATE_TRANSFER_PROGRESS,
                payload: {
                    ...transferItem,
                    state: 'error'
                }
            }
            yield put(errorAction)
        },
        function* () {
            const finishedAction: UpdateTransferProgressAction = {
                type: UPDATE_TRANSFER_PROGRESS,
                payload: {
                    ...transferItem,
                    state: 'finished'
                }
            }
            yield put(finishedAction)
        }
    )
}
function* handlePaste(action: PasteFromStagingAreaAction) {
    const state: AppState = yield select()
    const destionationFolder: Path = state.tabs.tabs[state.tabs.current]
    
    const transfers: TransferItem[] = Object.values(state.transfers).filter(t => t.state === 'added')

    for (let transfer of transfers) {
        const destionation: Path = pathModule.join(destionationFolder, pathModule.basename(transfer.path))
        // TODO: Include destination in the redux state itself
        yield handleOnePaste(transfer, destionation + '.copy')
        yield put({ type: LOAD_CONTENTS })
    }

}

export default function* handleTransfers() {
    yield all([
        takeEvery(PASTE_FROM_STAGING_AREA, handlePaste)
    ])
}