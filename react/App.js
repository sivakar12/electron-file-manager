import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'
import registerKeyboardEvents from './register-keyboard-events'

import { 
    Tabs,
    Path,
    Contents,
    Favorites,
    TitleBar,
    StagingArea,
    Properties
 } from './containers'

import './stylus/index.styl'

export default function App(props) {
    const store = configureStore()
    registerKeyboardEvents(store.dispatch)
    return (
        <Provider store={store}>
            <div id="container">
                <div id="title-bar">
                    <TitleBar/>
                </div>
                <div id="path-bar">
                    <Path/>
                </div>
                <div id="contents">
                    <Contents/>
                </div>
                <div id="properties">
                    <Properties/>
                </div>
                <div id="favorites">
                    <Favorites/>
                </div>
                <div id="staging-area">
                    <StagingArea/>
                </div>
            </div>
        </Provider>
    )
}
