import React from 'react'

export const TabItem = (props) => (
    <div className={`tab-bar-item ${props.active ? 'active' : ''}`} 
        onClick={props.onClick}
        onClose={props.onClose}>
        <div className="tab-bar-path">{props.path}</div>
        <div onClick={e => {e.stopPropagation(); props.onClose() } } className="tab-bar-close">x</div>
    </div>
)