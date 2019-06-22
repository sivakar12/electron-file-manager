import React from 'react'
import { useSelector } from 'react-redux'

import TitleBar from './TitleBar'
import Contents from './Contents'
import PathBar from './MainToolbar'
import Favorites from './Favorites'
import Properties from './Properties'
import Transfers from './Transfers'

import { AppState } from '../reducers'

export default function() {
    const viewState = useSelector((state: AppState) => state.view)
    return (
        <div id="container">
            <div id="title-bar">
                <TitleBar/>
            </div>
            <div id="main-toolbar">
                <PathBar/>
            </div>
            <div id="contents">
                <Contents/>
            </div>
            { viewState.properties && <div id="properties">
                <Properties/>
            </div> }
            { viewState.favorites && 
            <div id="favorites">
                <Favorites/>
            </div> }
            <div id="transfers-panel">
                <Transfers/>
            </div>
        </div>
    )
}