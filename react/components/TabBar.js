import React from 'react'
export const TabBar = props => (
    <div className="tab-bar">
        {props.children}
        <span className="new-tab" onClick={props.onNewTab}>+</span>
    </div>
)