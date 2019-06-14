import React from 'react'

export default props => (
    <div className="favorites-panel">
        <div className="favorites-title">Favorites</div>
        {props.children}
        <div className="favorites-add-button" onClick={props.onAddFavorite}>
            (Add this folder)
        </div>
    </div>
)