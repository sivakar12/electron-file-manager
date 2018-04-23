import pathModule from 'path'
import actionTypes from '../actions/actionTypes'

const initialState = {
    current: 0,
    tabs: ['/']
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
            if (state.tabs.length == 1)
                return state
            let newCurrent
            if (state.current == state.tabs.length - 1)
                newCurrent = state.current - 1
            else
                newCurrent = state.current
            const { index } = action.payload
            newTabs = [...state.tabs.slice(0, index), 
                ...state.tabs.slice(index + 1)]
            return {
                current: newCurrent,
                tabs: newTabs
            }
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