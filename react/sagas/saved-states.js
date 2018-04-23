import { select, put } from 'redux-saga/effects'
import { 
    storeStateInJsonFile,
    getStateFromJsonFile
} from '../../utils'
import {
    loadFavorites
} from '../actions'

export function* storeStateInFile() {
    const { favorites, } = yield select()
    try {
        yield storeStateInJsonFile({favorites})
    } catch (e) {
        console.error(e)
    }
}

export function* loadStateFromFile() {
    try {
        const state = yield getStateFromJsonFile()
        yield put(loadFavorites(state.favorites))
    } catch (e) {
        console.error(e)
    }
}