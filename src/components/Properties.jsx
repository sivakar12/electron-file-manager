import React from 'react'

export default function Properties(props) {
    return (
        <div className="properties">
            <h3 className="properties-title">Properties</h3>
            <pre>{ JSON.stringify(props) }</pre>
        </div>
    )
}