import pathModule from 'path'

import {getHomeDirectory} from '../backend'
import { Path } from '../types/core'

interface TabsState {
    current: number,
    tabs: Path[]
}

export const switchTab = (index: number) => ({
    type: 'SWITCH_TAB',
    payload: { index }
})

export const closeTab = (index?: number) => ({
    type: 'CLOSE_TAB',
    payload: { index }
})

export const newTab = (path?: Path) => ({
    type: 'NEW_TAB',
    payload: { path }
})

export const nextTab = () => ({
    type: 'NEXT_TAB',
})

export const previousTab = () => ({
    type: 'PREVIOUS_TAB',
})

export const changePath = (path: Path) => ({
    type: 'CHANGE_PATH',
    payload: { path }
})

export const GoToParentFolder = () => ({
    type: 'GO_TO_PARENT_FOLDER',
    payload: {}
})

export type TabActions = 
| ReturnType<typeof switchTab> 
| ReturnType<typeof newTab>
| ReturnType<typeof closeTab>
| ReturnType<typeof nextTab>
| ReturnType<typeof previousTab>
| ReturnType<typeof changePath>
| ReturnType<typeof GoToParentFolder>

export const initialState: TabsState = {
    current: 0,
    tabs: [getHomeDirectory()]  // side effect but OK
} 

function handleTabClose({tabs, current}: TabsState, index: number) {
    let newTabs: Path[]
    let newCurrent: number

    newTabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)]
    if (current < index)
        newCurrent = current
    else newCurrent = current - 1
    if (newCurrent >= newTabs.length) newCurrent = newTabs.length - 1
    if (newCurrent < 0) newCurrent = 0
    return { tabs: newTabs, current: newCurrent }
}

export const reducer = (state: TabsState = initialState, action: any): TabsState => {
    let newPath: Path
    let newTabs: Path[]
    let newCurrent: number
    switch (action.type) {
        case 'NEW_TAB':
            let path
            if (action.payload && action.payload.path) {
                path = action.payload.path
            } else {
                path = state.tabs[state.current]    // create new tab of the current folder
            }
            return {
                ...state,
                tabs: [...state.tabs, path],
                current: state.tabs.length          // old length gives the index of current last
            }
        case 'CLOSE_TAB':
            let index
            if (action.payload && action.payload.index) {
                index = action.payload.index
            } else {
                index = state.current
            }
            return handleTabClose(state, index)
        case 'SWITCH_TAB':
            return Object.assign({}, state, { current: action.payload.index })
        case 'CHANGE_PATH':
            newPath = action.payload.path
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })
        case 'OPEN_FOLDER':
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: action.payload.path })
            return Object.assign({}, state, { tabs: newTabs })            
        case 'GO_TO_PARENT_FOLDER':
            const parentFolder = pathModule.dirname(state.tabs[state.current])
            newPath = parentFolder
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })            
        case 'NEXT_TAB':
            newCurrent = (state.current + 1) % state.tabs.length
            return Object.assign({}, state, { current: newCurrent })
        case 'PREVIOUS_TAB':
            newCurrent = (state.tabs.length + state.current - 1) % state.tabs.length
            return Object.assign({}, state, { current: newCurrent })
        default:
            return state
    }
}