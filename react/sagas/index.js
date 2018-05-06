import { put, all } from 'redux-saga/effects'

import { loadStateFromFile, switchTab } from '../actions'
import { watchWindowButtonEvents } from './window-buttons'
import { watchStateStorageEvents } from './state-storage'
import { watchContentsEvents } from './contents'
import { watchKeyboardEvents } from './keyboard-events'
import { watchFileTransferEvents } from './file-transfers'

function* initialize() {
    yield put(loadStateFromFile())
    yield put(switchTab(0))
}

export default function* rootSaga() {
    console.log('Root saga is running...')
    yield all([
        watchContentsEvents(),
        watchStateStorageEvents(),
        watchWindowButtonEvents(),
        watchKeyboardEvents(),
        watchFileTransferEvents(),
        initialize()
    ])
}


