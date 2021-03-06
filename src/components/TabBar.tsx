import React from 'react'

type Props = {
    children: React.ReactNodeArray,
    onNewTab: () => void
}
export default (props: Props) => (
    <div className="tab-bar">
        {props.children}
        <span className="tab-bar-new-tab" onClick={props.onNewTab}>+</span>
    </div>
)