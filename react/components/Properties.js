import React from 'react'

export function Properties(props) {
    if (props.data == null)
        return null
    return (
        <div className="properties">
            <h3 className="properties-title">Properties</h3>
            { JSON.stringify(props) }
        </div>
    )
}