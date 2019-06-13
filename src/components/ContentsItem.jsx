import React from 'react'
import filesize from 'filesize'

function ContentsItem(props) {
    return (
        <div className={`contents-item ${props.isSelected ? 'selected' : ''}`} 
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <div className="contents-item-name">
                {props.stats.isDirectory() ? '📁': '📃'}
                {props.name}
                {props.stats.isSymLink ? '🔗' : '' }
            </div>
            { !props.isDir &&
                <div className="contents-item-size">{filesize(props.stats.size)}</div>}
        </div>
    )
}

export default ContentsItem