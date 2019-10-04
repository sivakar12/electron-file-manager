import React from 'react'
import pathModule from 'path'

import TabBar from '../components/TabBar'
import TabItem from '../components/TabItem'
import { useTabs } from '../global-state'
import { newTab, closeTab, switchTab } from '../global-state/tabs'
import { Path } from '../types/core'

export default function() {
    const { tabsState, tabsDispatch } = useTabs()

    const { tabs, current } = tabsState
    
    function handleNewTab() {
        tabsDispatch(newTab())
    }

    function makeCloseTabHandler(i: number) {
        return function() {
            tabsDispatch(closeTab())
        }
    }
    
    function makeSwitchTabHandler(i: number) {
        return function() {
            tabsDispatch(switchTab(i))
        }
    }

    return (
        <TabBar onNewTab={() => handleNewTab()}>
            {tabs.map((t: Path, index: number) => 
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