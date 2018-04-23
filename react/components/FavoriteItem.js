import React from 'react'

export const FavoriteItem = props => (
    <div className="favorite-item" onClick={props.onClick}>
        {props.name}
    </div>
)