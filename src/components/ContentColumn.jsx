import React from 'react'

export default function(props) {
    return (
        <div className='contents-column'>
            {props.path}
            {props.children}
        </div>
    )
}