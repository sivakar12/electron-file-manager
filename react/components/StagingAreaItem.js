import React from 'react'
import pathModule from 'path'
export function StagingAreaItem(props) {
    return (
        <div className="staging-area-item">
            <div className="staging-area-item-name">
                {pathModule.basename(props.path)}</div>
            <span className="staging-area-item-remove"
                onClick={() => props.onRemove()}>x</span>
        </div>
    )
}