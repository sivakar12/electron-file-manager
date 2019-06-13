import React from 'react'
import { useSelector } from 'react-redux'

import TitleBar from './TitleBar'
import Contents from './Contents'
import { AppState } from '../reducers'

export default function() {
    const viewState = useSelector((state: AppState) => state.view)
    return (
        <div id="container">
            <div id="title-bar">
                <TitleBar/>
            </div>
            <div id="path-bar">
            </div>
            <div id="contents">
                <Contents/>
            </div>
            { viewState.properties && <div id="properties">
            
            </div> }
            { viewState.favorites && 
            <div id="favorites">
            
            </div> }
            <div id="staging-area">
            
            </div>
        </div>
    )
}