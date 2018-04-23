import React from 'react'

export const TabItem = (props) => (
    <div className={`tab-bar-item ${props.active ? 'active' : ''}`} 
        onClick={props.onClick}
        onClose={props.onClose}>
        {props.path}
        <span onClick={e => {e.stopPropagation(); props.onClose() } } className="close">x</span>
    </div>
)