import Immutable from 'immutable'
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

const initialState: TransfersState = Immutable.Map<Path, TransferItem>()

export default function(state: TransfersState = initialState, 
    action: TransferActions): TransfersState {
        let path: string
        let transferItem: TransferItem
        switch (action.type) {
            case COPY_TO_STAGING_AREA:
                path = action.payload.path
                transferItem = {
                    path,
                    cut: false,
                    started: false,
                    complete: false
                }
                return state.set(path, Immutable.fromJS(transferItem))
            case CUT_TO_STAGING_AREA:
                path = action.payload.path
                transferItem = {
                    path,
                    cut: true,
                    started: false,
                    complete: false
                }
                return state.set(path, Immutable.fromJS(transferItem))
            case REMOVE_FROM_STAGING_AREA:
                return state.remove(action.payload.path)
            case UPDATE_TRANSFER_PROGRESS:
                return state.set(action.payload.path, Immutable.fromJS(action.payload))
            default:
                return state
        }
    } 