import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

const initialState = {
    current: 0,
    tabs: ['/']
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
    console.log('reducers tabs', { tabs: newTabs, current: newCurrent })
    return { tabs: newTabs, current: newCurrent }
}

export default function tabsReducer(state = initialState, action) {
    let newPath
    let newTabs
    switch (action.type) {
        case actionTypes.NEW_TAB:
            return Object.assign({}, state, {
              tabs: [...state.tabs, action.payload.path]  
            })
        case actionTypes.CLOSE_TAB:
            return handleTabClose(state, action.payload.index)
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
        default:
            return state
    }
}