import React from 'react'
import pathModule from 'path'

function getStatus(item) {
    if (item.complete) return 'done'
    if (!item.started) return item.type
    if (item.totalBytes && item.bytesDone) return item.bytesDone + '/' + item.totalBytes
}

export default (props) => (
    <div className="transfers-panel-item">
        <span className="transfers-panel-item-name">{pathModule.basename(props.path)}</span>
        <span className="transfers-panel-item-status">{getStatus(props)}</span>
        <span className="transfers-panel-item-remove" onClick={props.onRemove}>x</span>
    </div>
)