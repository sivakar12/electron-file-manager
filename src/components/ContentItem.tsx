import React from 'react'
import filesize from 'filesize'

import { ContentItem } from '../types/core'

type Props = ContentItem & { 
    onClick?: React.EventHandler<React.MouseEvent>,
    onDoubleClick?: React.EventHandler<React.MouseEvent>
}

export default function(props: Props) {
    return <div className="content-item">
                {props.stats.isDirectory() ? '📁': '📃'}
                {props.name}
                { !props.stats.isDirectory() &&
<div className="contents-item-size">{filesize(props.stats.size)}</div>}
    </div>
}