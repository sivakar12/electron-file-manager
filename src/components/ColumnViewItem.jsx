import React from 'react'

export default function(props) {
    let icon = props.content.isDirectory ? '📁': '📃'
    if (props.content.errorAccessing) {
        icon = '❌'
    }
    return (
        <div className={`column-view-item ${props.content.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="column-view-item-name">
                { icon }
                {props.content.name}
                {props.content.isSymLink ? '🔗' : '' }
            </div>
        </div>
    )
}