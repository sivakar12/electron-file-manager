import { SelectionState } from '../types/redux-state'
import {
    SELECT_ITEM,
    CLEAR_SELECTION,
    OPEN_FOLDER,
    GO_TO_PARENT_FOLDER,
    SelectionActions,
    SET_PROPERTIES
} from '../types/redux-actions'
import { statement } from '@babel/template';

const initialState: SelectionState = { path: null }

export default function selectionReducer(state: SelectionState = initialState, 
        action: SelectionActions): SelectionState {
    switch (action.type) {
        case SELECT_ITEM:
            if (state.path === action.payload.path) return { path: null}
            return { path: action.payload.path }
        case CLEAR_SELECTION:
        case OPEN_FOLDER:
        case GO_TO_PARENT_FOLDER:
            return { path: null }
        case SET_PROPERTIES:
            return { ...state, properties: action.payload.properties }
        default:
            return state
    }
}