import pathModule from 'path'

import {getHomeDirectory} from '../backend'
import { Path } from '../types/core'

interface TabsState {
    current: number,
    tabs: Path[]
}

export const SWITCH_TAB = 'SWITCH_TAB'
export interface SwitchTabAction {
    type: typeof SWITCH_TAB,
    payload: { index: number }
}

export const CLOSE_TAB = 'CLOSE_TAB'
export interface CloseTabAction {
    type: typeof CLOSE_TAB,
    payload: { index?: number }
}

export const NEW_TAB = 'NEW_TAB'
export interface NewTabAction {
    type: typeof NEW_TAB,
    payload: { path?: Path }
}

export const NEXT_TAB = 'NEXT_TAB'
export interface NextTabAction {
    type: typeof NEXT_TAB
}

export const PREVIOUS_TAB = 'PREVIOUS_TAB'
export interface PreviousTabAction {
    type: typeof PREVIOUS_TAB
}

export const CHANGE_PATH = 'CHANGE_PATH'
export interface ChangePathAction {
    type: typeof CHANGE_PATH,
    payload: { path: Path }
}

export const GO_TO_PARENT_FOLDER = 'GO_TO_PARENT_FOLDER'
export interface GoToParentFolderAction {
    type: typeof GO_TO_PARENT_FOLDER
}

export const OPEN_FOLDER = 'OPEN_FOLDER'
export interface OpenFolderAction {
    type: typeof OPEN_FOLDER,
    payload: { path: Path }
}

export type TabActions = SwitchTabAction 
| NewTabAction
| CloseTabAction
| NextTabAction
| PreviousTabAction
| ChangePathAction
| OpenFolderAction
| GoToParentFolderAction

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

export const reducer = (state: TabsState = initialState,   action: TabActions): TabsState => {
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