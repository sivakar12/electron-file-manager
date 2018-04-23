import React from 'react'

// Props: isFolder, name, onClick
export function File(props) {
    return (
        <div className={"file"} onClick={props.onClick}>
            {props.filename}
        </div>
    )
}