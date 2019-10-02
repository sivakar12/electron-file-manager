import { hot } from 'react-hot-loader/root'
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './reducers'
import rootSaga from './sagas'
import MainLayout from './containers/MainLayout'

import './styles/App.scss';
    
const App: React.FC = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger),
    )
    sagaMiddleware.run(rootSaga)
    return (
        
        <Provider store={store}>
            <MainLayout/>
        </Provider>
        )
    }

export default hot(App);
