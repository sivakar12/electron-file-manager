// @flow

import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

import type { 
    SetContentsAction,
    OpenFolderAction,
    GoToParentFolderAction
} from '../actions/contents'

const initialState = []

type ContentsReducerAction = SetContentsAction | OpenFolderAction | GoToParentFolderAction

export default function contentsReducer(state: Array<String> = initialState,
     action: ContentsReducerAction) {
    switch (action.type) {
        case actionTypes.SET_CONTENTS:
            return action.payload.contents
        case actionTypes.OPEN_FOLDER:
            return []
        case actionTypes.GO_TO_PARENT_FOLDER:
            return []
        default:
            return state
    }
}