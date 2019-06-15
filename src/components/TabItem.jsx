import React from 'react'

export default (props) => (
    <div className={`tab-bar-item ${props.active ? 'active' : ''}`} 
        onClick={props.onClick}>
        <div className="tab-bar-path">{props.name}</div>
        <div onClick={e => {e.stopPropagation(); props.onClose() } } className="tab-bar-close">x</div>
    </div>
)