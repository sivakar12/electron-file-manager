import actionTypes from '../actions/actionTypes'

const initialState = []
export default function stagingAreaReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.COPY_TO_STAGING_AREA:
            return [...state, {
                path: action.payload.path,
                cut: false,
                complete: false
            }]
        case actionTypes.CUT_TO_STAGING_AREA:
            return [...state, {
                path: action.payload.path,
                cut: true,
                complete: false
            }]
        case actionTypes.REMOVE_FROM_STAGING_AREA:
            const { index } = action.payload
            return [...state.slice(0, index), ...state.slice(index + 1)]
        case actionTypes.TRANSFER_COMPLETE:
            let newState = state.slice(0)
            newState[action.payload.index].complete = true
            return newState
        default:
            return state
    }
}