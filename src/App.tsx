import { hot } from 'react-hot-loader/root'
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './reducers'
import MainLayout from './containers/MainLayout'

import './styles/App.scss';
import { addKeyboardShortcuts } from './keyboard-shortcuts';
    
const store = createStore(
    rootReducer,
    applyMiddleware(logger),
)

addKeyboardShortcuts(store)

const App = () => {
    return (
        <Provider store={store}>
            <MainLayout/>
        </Provider>
    )
}
    
export type StoreType = typeof store
export default hot(App);
