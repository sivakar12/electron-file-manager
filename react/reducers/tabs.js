import actionTypes from '../actions/actionTypes'

const initialState = {
    current: 0,
    tabs: ['/']
}

export default function tabsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.NEW_TAB:
            return Object.assign({}, state, {
              tabs: [...state.tabs, action.payload.path]  
            })
        case actionTypes.CLOSE_TAB:
            if (state.tabs.length == 1)
                return state
            let newCurrent
            if (current == state.tabs.length - 1)
                newCurrent = current - 1
            else
                newCurrent = current
            const { index } = action.payload
            const newTabs = [...state.tabs.slice(0, index), 
                ...state.tabs.slice(index + 1)]
            return {
                current: newCurrent,
                tabs: newTabs
            }
        case actionTypes.SWITCH_TAB:
            return Object.assign({}, state, { current: action.payload.index })

        case actionTypes.CHANGE_PATH:
            const newPath = action.payload.path
            return Object.assign([], state.tabs, 
                { [action.payload.index]: newPath })
        case actionTypes.OPEN_FOLDER:
            const { foldername } = action.payload
            const newPath = pathModule.join(state, foldername)
            return Object.assign([], state.tabs, 
                { [action.payload.index]: newPath })
        case actionTypes.GO_TO_PARENT_FOLDER:
            const parentFolder = pathModule.dirname(state)
            const newPath = parentFolder
            return Object.assign([], state.tabs, 
                { [action.payload.index]: newPath })
        default:
            return state
    }
}