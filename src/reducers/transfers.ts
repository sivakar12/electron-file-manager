import _ from 'lodash'
import {
    CUT_TO_STAGING_AREA,
    COPY_TO_STAGING_AREA,
    PASTE_FROM_STAGING_AREA,
    REMOVE_FROM_STAGING_AREA,
    UPDATE_TRANSFER_PROGRESS,
    TransferActions
} from '../types/redux-actions'

import { TransferItem, Path } from '../types/core'
import { TransfersState } from '../types/redux-state'

const initialState: TransfersState = {}

export default function(state: TransfersState = initialState, 
    action: TransferActions): TransfersState {
        let path: string
        let transferItem: TransferItem
        switch (action.type) {
            case COPY_TO_STAGING_AREA:
                path = action.payload.path
                transferItem = {
                    path,
                    type: 'copy',
                    started: false,
                    complete: false
                }
                return { ...state, [path]: transferItem }
            case CUT_TO_STAGING_AREA:
                path = action.payload.path
                transferItem = {
                    path,
                    type: 'cut',
                    started: false,
                    complete: false
                }
                return { ...state, [path]: transferItem }
            case REMOVE_FROM_STAGING_AREA:
                return _.omit(state, action.payload.path)
            case UPDATE_TRANSFER_PROGRESS:
                const newItem = { ...state[action.payload.path], ...action.payload }
                return {...state, [action.payload.path]: newItem }
            default:
                return state
        }
    } 