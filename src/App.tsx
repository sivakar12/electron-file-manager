import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const DisplayState: React.FC = (props) => {
    const state = useSelector(state => state)
    return (
        <div>{JSON.stringify(state)}</div>
    )        
}
    
const App: React.FC = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return (
        
        <Provider store={store}>
        <DisplayState/>
        </Provider>
        )
    }

export default App;
