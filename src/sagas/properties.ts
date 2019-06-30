import { select, put } from "redux-saga/effects";

import { AppState } from "../reducers";
import { getFileDetails, getFolderSize } from "../backend";
import { PropertiesItem } from "../types/core";
import { SetPropertiesAction, SET_PROPERTIES } from "../types/redux-actions";
import { channelFromObservable } from "./helpers";

export function* loadProperties() {
    const state: AppState = yield select()
    
    // if properties tab is not visible do not calculate
    if (!state.view.properties) return

    const path = state.selection || state.tabs.tabs[state.tabs.current]
    const properties: PropertiesItem = yield getFileDetails(path)
    const action: SetPropertiesAction = {
        type: SET_PROPERTIES,
        payload: { properties: properties, loadingFolderSize: false, folderSizeTimeout: false, folderSize: 0 }
    }
    yield put(action)
    if (properties.isDirectory) {

        // TODO: Cancel subscription when saga is terminated. There is a way
        yield channelFromObservable(getFolderSize(path),
        function* (size: number) {
            const action: SetPropertiesAction = {
                type: SET_PROPERTIES,
                payload: {
                    folderSize: size,
                    loadingFolderSize: true
                }
            }
            yield put(action)
        },
        function* (error: any) {
            const action: SetPropertiesAction = {
                type: SET_PROPERTIES,
                payload: {
                    loadingFolderSize: false,
                    folderSizeTimeout: true
                }
            }
            yield put(action)
        },
        function*() {
            const action: SetPropertiesAction = {
                type: SET_PROPERTIES,
                payload: { 
                    loadingFolderSize: false
                }
            }
            yield put(action)
        })
    }
}