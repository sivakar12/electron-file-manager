import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    GoToParentFolderAction,
    GO_TO_PARENT_FOLDER,
    ChangeViewAction,
    CHANGE_VIEW
} from '../types/redux-actions'
import { AppState } from '../reducers'
import MainToolbar from '../components/MainToolbar'
import { ViewType } from '../types/core';

export default function() {

    const state = useSelector((state: AppState) => state)
    const path = state.tabs.tabs[state.tabs.current]
    const viewType = state.view.view

    const dispatch = useDispatch()
    function handleOnGoUp() {
        const action: GoToParentFolderAction = {
            type: GO_TO_PARENT_FOLDER
        }
        dispatch(action)
    }
    function makeToggleViewHandler(view: ViewType) {
        const action: ChangeViewAction = {
            type: CHANGE_VIEW,
            payload: { view }
        }
        return function() {
            dispatch(action)
        }
    }
    return <MainToolbar 
        path={path} 
        onGoUp={handleOnGoUp}
        onSetGridView={makeToggleViewHandler('grid')}
        onSetColumnView={makeToggleViewHandler('column')}
        currentView={viewType}
        />
}