import React from 'react'

import Tabs from './Tabs'

const TitleBar = (props) => (
    <div className="title-bar">
        <Tabs/>
        <div className="title-bar-draggable-area">
            {/* close buttons go here */}
        </div>
    </div>
)

export default TitleBar