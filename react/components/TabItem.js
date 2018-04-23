import React from 'react'

export const TabItem = (props) => (
    <div className="tab-bar-item" 
        onClick={props.onClick}
        onClose={props.onClose}>
        {props.path}{props.active && '*'}
        <span onClick={props.onClose}>x</span>
    </div>
)