import React from 'react'
import pathModule from 'path'

import {
    NEW_TAB,
    SWITCH_TAB,
    CLOSE_TAB,
    NewTabAction,
    SwitchTabAction,
    CloseTabAction
} from '../global-state/tabs'

import TabBar from '../components/TabBar'
import TabItem from '../components/TabItem'
import { useTabs } from '../global-state'

export default function() {
    const { tabsState, tabsDispatch } = useTabs()

    const { tabs, current } = tabsState
    
    function handleNewTab() {
        const action: NewTabAction = {
            type: NEW_TAB,
            payload: {}
        }
        tabsDispatch(action)
    }

    function makeCloseTabHandler(i: number) {
        return function() {
            const action: CloseTabAction = {
                type: CLOSE_TAB,
                payload: { index : i }
            }
            tabsDispatch(action)
        }
    }
    
    function makeSwitchTabHandler(i: number) {
        return function() {
            const action: SwitchTabAction = {
                type: SWITCH_TAB,
                payload: { index : i }
            }
            tabsDispatch(action)
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
            )}
        </TabBar>
    )
}