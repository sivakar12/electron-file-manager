import React from 'react'

// Props: isFolder, name, onClick
export default function File(props) {
    const style = {
        padding: '4px',
        margin: '2px',
        width: '120px',
        'white-space': 'nowrap',
        overflow: 'hidden',
        'text-overflow': 'ellipsis'
    }
    return (
        <div style={style} className={"file"} onClick={props.onClick}>
            {props.filename}
        </div>
    )
}