import React from 'react'

type Props = {
    active: boolean,
    name: string,
    onClick: () => void,
    onClose: () => void
}
export default (props: Props) => (
    <div className={`tab-bar-item ${props.active ? 'active' : ''}`} 
        onClick={props.onClick}>
        <div className="tab-bar-path">{props.name}</div>
        <div onClick={e => {e.stopPropagation(); props.onClose() } } className="tab-bar-close">x</div>
    </div>
)