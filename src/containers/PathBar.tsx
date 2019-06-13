import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    GoToParentFolderAction,
    GO_TO_PARENT_FOLDER
} from '../types/redux-actions'
import { AppState } from '../reducers'
import PathBar from '../components/PathBar'

export default function() {

    const path = useSelector((state: AppState) => state.tabs.tabs[state.tabs.current])
    const dispatch = useDispatch()
    function handleOnGoUp() {
        const action: GoToParentFolderAction = {
            type: GO_TO_PARENT_FOLDER
        }
        dispatch(action)
    }
    return <PathBar path={path} onGoUp={handleOnGoUp}/>
}