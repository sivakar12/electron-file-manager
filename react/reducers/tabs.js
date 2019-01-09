import pathModule from 'path'
import actionTypes from '../actions/actionTypes'
import { getHomeFolder } from '../../utils'
const initialState = {
    current: 0,
    tabs: [getHomeFolder()]
}

function handleTabClose({tabs, current}, index) {
    let newTabs
    let newCurrent

    newTabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)]
    if (current < index)
        newCurrent = current
    else if (current >= index) newCurrent = current - 1
    if (newCurrent >= newTabs.length) newCurrent = newTabs.length - 1
    if (newCurrent < 0) newCurrent = 0
    return { tabs: newTabs, current: newCurrent }
}

export default function tabsReducer(state = initialState, action) {
    let newPath
    let newTabs
    let newCurrent
    switch (action.type) {
        case actionTypes.NEW_TAB:
            let path
            if (action.payoad && action.payload.path) {
                path = action.payload.path
            } else {
                path = getHomeFolder()
            }
            return Object.assign({}, state, {
              tabs: [...state.tabs, path]  
            })
        case actionTypes.CLOSE_TAB:
            let index
            if (action.payload && action.payload.index) {
                index = action.payload.index
            } else {
                index = state.current
            }
            return handleTabClose(state, index)
        case actionTypes.SWITCH_TAB:
            return Object.assign({}, state, { current: action.payload.index })
        case actionTypes.CHANGE_PATH:
            newPath = action.payload.path
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })
        case actionTypes.OPEN_FOLDER:
            const { foldername } = action.payload
            newPath = pathModule.join(state.tabs[state.current], foldername)
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })            
        case actionTypes.GO_TO_PARENT_FOLDER:
            const parentFolder = pathModule.dirname(state.tabs[state.current])
            newPath = parentFolder
            newTabs = Object.assign([], state.tabs, 
                { [state.current]: newPath })
            return Object.assign({}, state, { tabs: newTabs })            
        case actionTypes.NEXT_TAB:
            newCurrent = (state.current + 1) % state.tabs.length
            return Object.assign({}, state, { current: newCurrent })
        case actionTypes.PREVIOUS_TAB:
            newCurrent = (state.tabs.length + state.current - 1) % state.tabs.length
            return Object.assign({}, state, { current: newCurrent })
        default:
            return state
    }
}