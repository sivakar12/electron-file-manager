import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'
import { MainLayout } from './containers'

export default function App(props) {
    const store = configureStore()
    return (
        <Provider store={store}>
            <MainLayout/>
        </Provider>
    )
}