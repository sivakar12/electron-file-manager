import React from 'react'
import { ContentItem } from '../types/core';

type Props = {
    content: ContentItem,
    onClick?: (event: any) => void,
    onDoubleClick?: (item: any) => void,
    isSelected?: boolean
}
export default function(props: Props) {
    let icon = props.content.isDirectory ? '📁': '📃'
    if (props.content.errorAccessing) {
        icon = '❌'
    }
    return (
        <div className={`column-view-item ${props.isSelected ? 'selected' : ''}`} 
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