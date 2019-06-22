import React from 'react'

export default function(props) {
    return (
        <div className='column-view-column'>
            {props.path}
            {props.children}
        </div>
    )
}