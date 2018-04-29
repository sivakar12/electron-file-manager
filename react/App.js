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
    StagingArea
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
                <Favorites/>
                <StagingArea/>
            </div>
        </Provider>
    )
}
