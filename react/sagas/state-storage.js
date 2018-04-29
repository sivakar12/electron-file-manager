import { takeEvery, select, put } from 'redux-saga/effects'
import { 
    storeStateInJsonFile,
    getStateFromJsonFile
} from '../../utils'
import actionTypes from '../actions/actionTypes'
import { loadFavorites } from '../actions'


export function* watchStateStorageEvents() {
    yield takeEvery(actionTypes.ADD_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.RENAME_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.REMOVE_FAVORITE, storeStateInFile)
    yield takeEvery(actionTypes.LOAD_STATE_FROM_FILE, loadStateFromFile)
    yield takeEvery(actionTypes.STORE_STATE_IN_FILE, storeStateInFile)
    
}

function* storeStateInFile() {
    const { favorites, } = yield select()
    try {
        yield storeStateInJsonFile({favorites})
    } catch (e) {
        console.error(e)
    }
}

function* loadStateFromFile() {
    try {
        const state = yield getStateFromJsonFile()
        yield put(loadFavorites(state.favorites))
    } catch (e) {
        console.error(e)
    }
}