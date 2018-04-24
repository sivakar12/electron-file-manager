import React from 'react'

export const FavoritesPanel = props => (
    <div className="favorites-panel">
        <h3>Favorites</h3>
        {props.children}
        <button onClick={props.onAddFavorite}>
            Add this folder
        </button>
    </div>
)