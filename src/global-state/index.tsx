import React, { createContext, useReducer, useState, useContext } from 'react'
import { Path } from '../types/core'

import { initialState as tabsInitialState, reducer as tabsReducer } from './tabs'
import { ViewState, defaultState as defaultViewState} from './view'

const GlobalContext = createContext(null)

export const GlobalContextProvider = ({ children }) => {
    const [selection, setSelection] = useState<Path>(null)
    const [tabsState, tabsDispatch] = useReducer(tabsReducer, tabsInitialState)
    const [viewState, setViewState] = useState<ViewState>(defaultViewState)
    
    const contextValue = {
        selection,
        setSelection,
        tabsState,
        tabsDispatch,
        viewState,
        setViewState
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useTabs = () => {
    const { tabsState, tabsDispatch } = useContext(GlobalContext)
    return { tabsState, tabsDispatch }
}

export const useSelection = () => {
    const { selection, setSelection } = useContext(GlobalContext)
    return { selection, setSelection }
}

export const useViewState = () => {
    const { viewState, setViewState } = useContext(GlobalContext)
    return { viewState, setViewState }
}

export const useCurrentPath = (): Path => {
    const { tabsState } = useContext(GlobalContext)
    const { tabs, current } = tabsState
    return tabs[current]
}