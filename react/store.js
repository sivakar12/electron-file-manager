import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
        applyMiddleware(logger)
    )
    sagaMiddleware.run(rootSaga)
    return store
}