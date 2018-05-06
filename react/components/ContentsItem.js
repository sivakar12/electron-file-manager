import React from 'react'
import filesize from 'filesize'

// Props: isFolder, name, onClick
export function ContentsItem(props) {
    return (
        <div className={`contents-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-item-name">
                {props.isDir ? '📁': '📃'}
                {props.filename}
                {props.isSymLink ? '🔗' : '' }
            </div>
            { !props.isDir &&
                <div className="contents-item-size">{filesize(props.size)}</div>}
        </div>
    )
}