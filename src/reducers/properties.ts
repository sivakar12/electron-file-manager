import { PropertiesState } from "../types/redux-state";
import { PropertiesActions, SET_PROPERTIES } from "../types/redux-actions";

const initialState: PropertiesState = {}

export default function(state: PropertiesState = initialState, 
        action: PropertiesActions): PropertiesState {
    switch(action.type) {
        case SET_PROPERTIES:
            return action.payload
        default:
            return state
    }
}