import React from 'react'
import { ContentItem } from '../types/core'

type Props = ContentItem & {
    isSelected: boolean,
    onClick: () => void,
    onDoubleClick: () => void
}

export default (props: Props) => {
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
