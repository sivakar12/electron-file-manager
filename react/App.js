import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'
import { 
    Tabs,
    Path,
    Contents,
    Favorites,
    TitleBar
 } from './containers'

import './stylus/index.styl'

export default function App(props) {
    const store = configureStore()
    return (
        <Provider store={store}>
            <div>
                <TitleBar/>
                <Path/>
                <Contents/>
                <Favorites/>
            </div>
        </Provider>
    )
}
