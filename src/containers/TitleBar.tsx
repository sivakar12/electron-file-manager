import React from 'react'
import { useDispatch } from 'react-redux';

import Tabs from './Tabs'

import {
    CLOSE_WINDOW,
    MINIMIZE_WINDOW,
    TOGGLE_MAXIMIZE_WINDOW,
    CloseWindowAction,
    MinimizeWindowAction,
    ToggleMaximizeWindowAction,
} from '../types/redux-actions'
import { AppState } from '../reducers'

export default function() {
    const dispatch = useDispatch()

    function handleMinimizeWindow() {
        const action: MinimizeWindowAction = {
            type: MINIMIZE_WINDOW
        }
        dispatch(action)
    }

    function handleToggleMaximizeWindow() {
        const action: ToggleMaximizeWindowAction = {
            type: TOGGLE_MAXIMIZE_WINDOW
        }
        dispatch(action)
    }

    function handleCloseWindow() {
        const action: CloseWindowAction = {
            type: CLOSE_WINDOW
        }
        dispatch(action)
    }
    
    return (
        <div className="title-bar">
            <Tabs/>
            <div className="title-bar-draggable-area">
                {/* empty space */}
            </div>
            <div className="title-bar-buttons">
                <div className="title-bar-button" 
                    onClick={handleMinimizeWindow}>-</div>
                <div className="title-bar-button" 
                    onClick={handleToggleMaximizeWindow}>o</div>
                <div className="title-bar-button"
                    onClick={handleCloseWindow}>x</div>
            </div>
        </div>
    )
}