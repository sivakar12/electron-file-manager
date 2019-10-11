import React from 'react'

type Props = {
    onClose: () => void,
    onAddFavorite: () => void,
    children: React.ReactNodeArray
}
export default (props: Props) => (
    <div className="favorites-panel">
        <div className="favorites-close" onClick={props.onClose}>x</div>
        <div className="favorites-title">Favorites</div>
        {props.children}
        <div className="favorites-add-button" onClick={props.onAddFavorite}>
            (Add this folder)
        </div>
    </div>
)