import actionTypes from '../actions/actionTypes'
import { Map } from 'immutable'

const initialState = new Map({})

export default function stagingAreaReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.COPY_TO_STAGING_AREA:
            return state.set(action.payload.path, {
                path: action.payload.path,
                cut: false,
                complete: false
            })
        case actionTypes.CUT_TO_STAGING_AREA:
            return state.set(action.payload.path, {
                path: action.payload.path,
                cut: true,
                complete: false
            })
        case actionTypes.REMOVE_FROM_STAGING_AREA:
            return state.remove(action.payload.path)
        case actionTypes.TRANSFER_COMPLETE:
            return state.merge({[action.payload.path]: {
                complete: true
            }})

    }
}