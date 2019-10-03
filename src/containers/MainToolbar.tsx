import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    GoToParentFolderAction,
    GO_TO_PARENT_FOLDER,
} from '../global-state/tabs'

import MainToolbar from '../components/MainToolbar'
import { ViewType } from '../types/core';
import { useCurrentPath, useViewState, useTabs } from '../global-state'

export default function() {

    const path = useCurrentPath()
    const { viewState, setViewState } = useViewState()
    const { tabsDispatch } = useTabs()

    const viewType = viewState.view

    function handleOnGoUp() {
        const action: GoToParentFolderAction = {
            type: GO_TO_PARENT_FOLDER
        }
        tabsDispatch(action)
    }

    function makeToggleViewHandler(view: ViewType) {
        return () => setViewState({...viewState, view})
    }
    return <MainToolbar 
        path={path} 
        onGoUp={handleOnGoUp}
        onSetGridView={makeToggleViewHandler('grid')}
        onSetColumnView={makeToggleViewHandler('column')}
        currentView={viewType}
        />
}