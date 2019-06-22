import React from 'react'

function ContentsGridItem(props) {
    return (
        <div className={`contents-grid-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-grid-item-name">
                {props.isDirectory ? '📁': '📃'}
                {props.name}
                {props.isSymLink ? '🔗' : '' }
            </div>
        </div>
    )
}

export default ContentsGridItem