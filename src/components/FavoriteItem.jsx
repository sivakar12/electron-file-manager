import React from 'react'

export default props => (
    <div className="favorites-item" onClick={props.onClick}>
        {props.name}
    </div>
)