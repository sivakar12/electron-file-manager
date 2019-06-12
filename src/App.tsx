import React from 'react';
import { createStore } from 'redux'
import { Provider, useSelector } from 'react-redux'

import rootReducer from './reducers'

const DisplayState: React.FC = (props) => {
    const state = useSelector(state => state)
    return (
        <div>{JSON.stringify(state)}</div>
    )        
}
    
const App: React.FC = () => {
    const store = createStore(rootReducer)
    return (
        
        <Provider store={store}>
        <DisplayState/>
        </Provider>
        )
    }

export default App;
