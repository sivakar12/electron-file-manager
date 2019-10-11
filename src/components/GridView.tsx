import React from 'react'

type Props = {
    children: React.ReactNodeArray
}
export default (props) => (
    <div className="contents-grid">
        {props.children}
    </div>
)