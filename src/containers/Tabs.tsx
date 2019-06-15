import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import pathModule from 'path'

import {
    NEW_TAB,
    SWITCH_TAB,
    CLOSE_TAB,
    NewTabAction,
    SwitchTabAction,
    CloseTabAction
} from '../types/redux-actions'

import { AppState } from '../reducers'

import TabBar from '../components/TabBar'
import TabItem from '../components/TabItem'

export default function() {
    const state = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

    const { tabs, current } = state.tabs 
    
    function handleNewTab() {
        const action: NewTabAction = {
            type: NEW_TAB,
            payload: {}
        }
        dispatch(action)
    }

    function makeCloseTabHandler(i: number) {
        return function() {
            const action: CloseTabAction = {
                type: CLOSE_TAB,
                payload: { index : i }
            }
            dispatch(action)
        }
    }
    
    function makeSwitchTabHandler(i: number) {
        return function() {
            const action: SwitchTabAction = {
                type: SWITCH_TAB,
                payload: { index : i }
            }
            dispatch(action)
        }
    }

    return (
        <TabBar onNewTab={() => handleNewTab()}>
            {tabs.map((t, index) => 
                <TabItem
                    key={index}
                    name={pathModule.basename(t)}
                    active={index === current}
                    onClick={makeSwitchTabHandler(index)}
                    onClose={makeCloseTabHandler(index)}
                />
                // <div key={index}>Tab {index}</div>
            )}
        </TabBar>
    )
}