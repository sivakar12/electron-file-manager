import React, { useEffect } from "react"
import { useTabs, useViewState } from "./global-state"
import { newTab, closeTab, previousTab, nextTab } from "./global-state/tabs"

export default () => {
    const { tabsDispatch } = useTabs()
    const { viewState, setViewState } = useViewState()
    useEffect(() => {
        document.body.addEventListener('keydown', event => {
            if (event.ctrlKey) {
                if (event.key === 'p') {
                    setViewState({...viewState, properties: !viewState.properties})
                }
                if (event.key === 'f') {
                    setViewState({...viewState, favorites: !viewState.favorites})
                }
                if (event.key === 't') {
                    tabsDispatch(newTab())
                }
                if (event.key === 'w') {
                    tabsDispatch(closeTab())
                }
                if (event.key === 'Tab') {
                    if (event.shiftKey) {
                        tabsDispatch(previousTab())
                    } else {
                        tabsDispatch(nextTab())
                    }
                }
            }
        })
    }, [])
} 