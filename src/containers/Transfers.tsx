import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../reducers';
import TransfersPanel from '../components/TransfersPanel'
import TransfersItem from '../components/TransfersItem'
import { TransferItem } from '../types/core';
import { RemoveFromStagingAreaAction, REMOVE_FROM_STAGING_AREA } from '../types/redux-actions';

export default function() {
    const transfers = useSelector((state: AppState) => state.transfers)
    const dispatch = useDispatch()

    function makeOnRemoveHandler(item: TransferItem) {
        const action: RemoveFromStagingAreaAction = {
            type: REMOVE_FROM_STAGING_AREA,
            payload: { path: item.path }
        }
        return function() {
            dispatch(action)
        }
    }
    return (
        <TransfersPanel>
            {Object.values(transfers).map(t =>
                <TransfersItem key={t.path} {...t} onRemove={makeOnRemoveHandler(t)}/>
            )}
        </TransfersPanel>
    )
}