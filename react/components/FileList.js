import React from 'react'

export default function FileList(props) {
    const style = {
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap'
    }
    return (
        <div style={style} className="file-list">
            {props.children}
        </div>
    )
}