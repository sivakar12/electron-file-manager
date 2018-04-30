import React from 'react'
export const PathBar = props => (
    <div className="path-bar">
        <div className="path-bar-up-button"
            onClick={() => props.onGoUp()}>{'<-'}</div>
        <div className="path-bar-path-string">{props.path}</div>
    </div>
)