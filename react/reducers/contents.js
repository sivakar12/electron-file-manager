// @flow
import pathModule from 'path'
import _ from 'lodash'

import actionTypes from '../actions/actionTypes'

import type { 
    SetContentsAction,
    OpenFolderAction,
    GoToParentFolderAction
} from '../actions/contents'

const initialState = []
type ContentItem = {
    name: string,
    isDir: boolean
}

type ContentsReducerAction = SetContentsAction | OpenFolderAction | GoToParentFolderAction

export default function contentsReducer(state: Array<ContentItem> = initialState,
     action: ContentsReducerAction) {
    switch (action.type) {
        case actionTypes.SET_CONTENTS:
            const sorted = _.orderBy(action.payload.contents, ['isDir', 'name'], ['desc', 'asc'])
            return sorted
        case actionTypes.OPEN_FOLDER:
            return []
        case actionTypes.GO_TO_PARENT_FOLDER:
            return []
        default:
            return state
    }
}