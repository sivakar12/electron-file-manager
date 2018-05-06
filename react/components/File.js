import React from 'react'
import filesize from 'filesize'

// Props: isFolder, name, onClick
export function File(props) {
    return (
        <div className={`contents-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-item-name">
                {props.isSymLink ? '->' : '' }
                {props.filename}
                {props.isDir ? '/': ''}
            </div>
            { !props.isDir &&
                <div className="contents-item-size">{filesize(props.size)}</div>}
        </div>
    )
}