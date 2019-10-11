import React from 'react'

type Props = {
    onClick: () => void,
    name: string
}
export default (props: Props) => (
    <div className="favorites-item" onClick={props.onClick}>
        {props.name}
    </div>
)