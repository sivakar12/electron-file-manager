import React from 'react'

export function StagingArea(props) {
    return (
        <div className="staging-area">
            <h3>Staging Area</h3>
            <div className="staging-area-items">
                {props.children}
            </div>
        </div>
    )

}