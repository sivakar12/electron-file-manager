import React from 'react'

function ContentsGridItem(props) {
    let icon = props.isDirectory ? '📁': '📃'
    if (props.errorAccessing) {
        icon = '❌'
    }
    return (
        <div className={`contents-grid-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-grid-item-name">
                { icon }
                {props.name}
                {props.isSymLink ? '🔗' : '' }
            </div>
        </div>
    )
}

export default ContentsGridItem