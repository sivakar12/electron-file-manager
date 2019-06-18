import { select } from 'redux-saga/effects'
import { AppState } from '../reducers';

export function* getCurrentPath() {
    const state: AppState = yield select()
    return state.tabs.tabs[state.tabs.current]
}

export function* getSelectedItem() {
    const state: AppState = yield select()
    return state.selection
}