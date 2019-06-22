import React from 'react'

export default function(props) {
    let icon = props.content.isDirectory ? '📁': '📃'
    if (props.content.errorAccessing) {
        icon = '❌'
    }
    return (
        <div className={`contents-column-item ${props.content.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-column-item-name">
                { icon }
                {props.content.name}
                {props.content.isSymLink ? '🔗' : '' }
            </div>
        </div>
    )
}