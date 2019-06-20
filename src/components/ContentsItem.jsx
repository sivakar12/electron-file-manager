import React from 'react'

function ContentsItem(props) {
    return (
        <div className={`contents-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-item-name">
                {props.isDirectory ? '📁': '📃'}
                {props.name}
                {props.isSymLink ? '🔗' : '' }
            </div>
        </div>
    )
}

export default ContentsItem