import {
    ContentActions,
    SET_CONTENTS,
    OPEN_FOLDER,
    GO_TO_PARENT_FOLDER
} from '../types/redux-actions'

import { ContentsState } from '../types/redux-state'

const initialState: ContentsState = []

export default function contentsReducer(state:ContentsState = initialState,
        action:ContentActions) {
    switch (action.type) {
        case SET_CONTENTS:
            return action.payload
        case OPEN_FOLDER:
            return []
        case GO_TO_PARENT_FOLDER:
            return []
        default:
            return state
    }
}