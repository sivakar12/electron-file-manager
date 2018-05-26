import React from 'react'
import pathModule from 'path'
export function StagingAreaItem(props) {
    let state
    if (props.complete) {
        if (props.cut) {
            state = 'moved'
        } else {
            state = 'copied'
        }
    } else {
        if (props.cut) {
            state = 'cut'
        } else {
            state = 'copy'
        }
    }
    return (
        <div className="staging-area-item">
            <div className="staging-area-item-name">
                {pathModule.basename(props.path)}
                ({state})
            </div>
            <span className="staging-area-item-remove"
                onClick={() => props.onRemove()}>x</span>
        </div>
    )
}