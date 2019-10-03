import { hot } from 'react-hot-loader/root'
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './reducers'
import MainLayout from './containers/MainLayout'

import './styles/App.scss';
import { addKeyboardShortcuts } from './keyboard-shortcuts';
import { GlobalContextProvider } from './global-state';
    
const store = createStore(
    rootReducer,
    applyMiddleware(logger),
)

addKeyboardShortcuts(store)

const App = () => {
    return (
        <Provider store={store}>
            <GlobalContextProvider>
                <MainLayout/>
            </GlobalContextProvider>
        </Provider>
    )
}
    
export type StoreType = typeof store
export default hot(App);
