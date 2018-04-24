import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'
import { MainLayout } from './containers'

import './stylus/index.styl'

export default function App(props) {
    const store = configureStore()
    return (
        <Provider store={store}>
            <MainLayout/>
        </Provider>
    )
}
