import _ from 'lodash'

import {
    ContentActions,
    SET_CONTENTS,
    OPEN_FOLDER,
    GO_TO_PARENT_FOLDER,
    CHANGE_PATH
} from '../types/redux-actions'

import { ContentsState } from '../types/redux-state'

const initialState: ContentsState = []

export default function contentsReducer(state:ContentsState = initialState,
        action:ContentActions): ContentsState {
    switch (action.type) {
        case SET_CONTENTS:
            const sorted = _.orderBy(action.payload.contents, ['isDirectory', 'name'], ['desc', 'asc'])
            return sorted
        case OPEN_FOLDER:
            return []
        case GO_TO_PARENT_FOLDER:
            return []
        case CHANGE_PATH:
            return []
        default:
            return state
    }
}