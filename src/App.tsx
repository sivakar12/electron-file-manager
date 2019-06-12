import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { AppState } from './reducers'
import rootSaga from './sagas'
import ContentItem from './components/ContentItem';

const ContentItems: React.FC = (props) => {
    const contents = useSelector((state: AppState) => state.contents)
    return <div>
        {contents.map(c => <ContentItem {...c} />)}
    </div>
             
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
        <ContentItems/>
        </Provider>
        )
    }

export default App;
