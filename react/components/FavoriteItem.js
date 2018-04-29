import React from 'react'

export const FavoriteItem = props => (
    <div className="favorites-item" onClick={props.onClick}>
        {props.name}
    </div>
)