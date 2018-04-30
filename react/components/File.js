import React from 'react'

// Props: isFolder, name, onClick
export function File(props) {
    return (
        <div className={`contents-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            {props.filename}{props.isDir ? '/': ''}
        </div>
    )
}