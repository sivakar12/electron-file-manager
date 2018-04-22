import React from 'react'

export default props => (
    <div className="favorite-item" onClick={props.onClick}>
        {props.name}
    </div>
)