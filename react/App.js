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
            <div>
                <TitleBar/>
                <Path/>
                <Contents/>
                <Properties/>
                <Favorites/>
                <StagingArea/>
            </div>
        </Provider>
    )
}
