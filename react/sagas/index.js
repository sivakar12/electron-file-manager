import { put, all } from 'redux-saga/effects'

import { loadStateFromFile, switchTab } from '../actions'
import { watchWindowButtonEvents } from './window-buttons'
import { watchStateStorageEvents } from './state-storage'
import { watchPathChanges } from './path-changes'
import { watchKeyboardEvents } from './keyboard-events'

function* initialize() {
    yield put(loadStateFromFile())
    yield put(switchTab(0))
}

export default function* rootSaga() {
    console.log('Root saga is running...')
    yield all([
        watchPathChanges(),
        watchStateStorageEvents(),
        watchWindowButtonEvents(),
        watchKeyboardEvents(),
        initialize()
    ])
}


