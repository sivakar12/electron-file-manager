import { SelectionState } from '../types/redux-state'
import {
    SELECT_ITEM,
    CLEAR_SELECTION,
    OPEN_FOLDER,
    GO_TO_PARENT_FOLDER,
    SelectionActions
} from '../types/redux-actions'

const initialState: SelectionState = null

export default function selectionReducer(state: SelectionState = initialState, 
        action: SelectionActions): SelectionState {
    switch (action.type) {
        case SELECT_ITEM:
            if (state == action.payload.path) return null
            return action.payload.path
        case CLEAR_SELECTION:
            return null
        case OPEN_FOLDER:
            return null
        case GO_TO_PARENT_FOLDER:
            return null
        default:
            return state
    }
}