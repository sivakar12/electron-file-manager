import pathModule from 'path'

import {
    TabActions,
    SWITCH_TAB,
    NEW_TAB,
    CLOSE_TAB,
    NEXT_TAB,
    PREVIOUS_TAB,
    CHANGE_PATH,
    OPEN_FOLDER,
    GO_TO_PARENT_FOLDER
} from '../types/redux-actions'
import { TabsState } from '../types/redux-state'

import {getHomeDirectory} from '../backend'

const initialState: TabsState = {
    current: 0,
    tabs: [getHomeDirectory()]
} 

function handleTabClose({tabs, current}: TabsState, index: number) {
    let newTabs
    let newCurrent

    newTabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)]
    if (current < index)
        newCurrent = current
    else newCurrent = current - 1
    if (newCurrent >= newTabs.length) newCurrent = newTabs.length - 1
    if (newCurrent < 0) newCurrent = 0
    return { tabs: newTabs, current: newCurrent }
}

export default function tabsReducer(state: TabsState = initialState, 
        action: TabActions): TabsState {
    let newPath
    let newTabs
    let newCurrent
    switch (action.type) {
        case NEW_TAB:
            let path
            if (action.payload && action.payload.path) {
                path = action.payload.path
            } else {
                path = getHomeDirectory()
            }
            return Object.assign({}, state, {
              tabs: [...state.tabs, path]  
            })
        case CLOSE_TAB:
            let index
            if (action.payload && action.payload.index) {
                index = action.payload.index
            } else {
                index = state.current
            }
            return handleTabClose(state, index)
        case SWITCH_TAB:
            return Object.assign({}, state, { current: action.payload.index })
        case CHANGE_PATH:
            newPath = action.payload.path
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })
        case OPEN_FOLDER:
            newPath = pathModule.join(state.tabs[state.current], action.payload.path)
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })            
        case GO_TO_PARENT_FOLDER:
            const parentFolder = pathModule.dirname(state.tabs[state.current])
            newPath = parentFolder
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })            
        case NEXT_TAB:
            newCurrent = (state.current + 1) % state.tabs.length
            return Object.assign({}, state, { current: newCurrent })
        case PREVIOUS_TAB:
            newCurrent = (state.tabs.length + state.current - 1) % state.tabs.length
            return Object.assign({}, state, { current: newCurrent })
        default:
            return state
    }
}