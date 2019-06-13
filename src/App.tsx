import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer, { AppState } from './reducers'
import rootSaga from './sagas'
import Contents from './containers/Contents';

import './styles/App.css';
    
const App: React.FC = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger),
    )
    sagaMiddleware.run(rootSaga)
    return (
        
        <Provider store={store}>
            <Contents/>
        </Provider>
        )
    }

export default App;
