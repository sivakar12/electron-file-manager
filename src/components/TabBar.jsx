import React from 'react'

export default props => (
    <div className="tab-bar">
        {props.children}
        <span className="tab-bar-new-tab" onClick={props.onNewTab}>+</span>
    </div>
)