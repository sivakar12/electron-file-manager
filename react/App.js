import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'
import registerKeyboardEvents from './register-keyboard-events'

import { 
    MainLayout
 } from './containers'

import './stylus/index.styl'

export default function App(props) {
    const store = configureStore()
    registerKeyboardEvents(store.dispatch)
    return (
        <Provider store={store}>
            <MainLayout/>     
        </Provider>
    )
}
