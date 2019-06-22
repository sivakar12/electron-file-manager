import React from 'react'

type Props = {
    children: React.ReactNodeArray
}

export default (props: Props) => (
    <div className="column-view">
        {props.children}
    </div>
)