import React from 'react'
import pathModule from 'path'

function getStatus(item) {
    if (item.state === 'finished') return 'done'
    if (item.state === 'started') return item.bytesDone + '/' + item.totalBytes
    if (item.state === 'added') return item.type
    if (item.state === 'error') return 'error'
}

export default (props) => (
    <div className="transfers-panel-item">
        <span className="transfers-panel-item-name">{pathModule.basename(props.path)}</span>
        <span className="transfers-panel-item-status">{getStatus(props)}</span>
        <span className="transfers-panel-item-remove" onClick={props.onRemove}>x</span>
    </div>
)