import { hot } from 'react-hot-loader/root'
import React from 'react';

import MainLayout from './containers/MainLayout'

import './styles/App.scss';
import { GlobalContextProvider } from './global-state';

const App = () => {
    return (
        <GlobalContextProvider>
            <MainLayout/>
        </GlobalContextProvider>
    )
}
    
export default hot(App);
