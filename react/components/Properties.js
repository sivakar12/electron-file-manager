import React from 'react'

export function Properties(props) {
    return (
        <div className="properties">
            <h3 className="properties-title">Properties</h3>
            { JSON.stringify(props) }
        </div>
    )
}