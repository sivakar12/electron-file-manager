import React from 'react'

import Tabs from './Tabs'

import { minimizeWindow, toggleMaximize, closeWindow } from '../backend/window';

export default function() {

    function handleMinimizeWindow() {
        minimizeWindow()
    }

    function handleToggleMaximizeWindow() {
        toggleMaximize()
    }

    function handleCloseWindow() {
        closeWindow()
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