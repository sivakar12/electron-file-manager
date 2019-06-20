import React from 'react'
import _ from 'lodash'
import fileSize from 'filesize'

export default function Properties(props) {

    return (
        <div className="properties">
            <h3 className="properties-title">Properties</h3>
            {_.entries(props.properties).map(([key, value]) => (
                <div key={key} className="properties-item">
                    <div className="properties-item-key">{key}</div>
                    <div className="properties-item-value">{JSON.stringify(value)}</div>
                </div>
            ))}
            <h2>Folder Size: {fileSize(props.size)}</h2>
        </div>
    )
}