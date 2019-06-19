import React from 'react'

export default (props) => (
    <div className="transfers-panel-item">
        <span className="transfers-panel-item-name">{props.path}</span>
        <span className="transfers-panel-item-remove" onClick={props.onRemove}>x</span>
    </div>
)