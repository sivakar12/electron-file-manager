import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Tabs from './Tabs'
import { 
    minimizeWindow,
    toggleMaximizeWindow,
    closeWindow
 } from '../actions'

const TitleBar = (props) => (
    <div className="title-bar">
        <Tabs/>
        <div className="title-bar-draggable-area">
            {/* close buttons go here */}
        </div>
        <div class="title-bar-buttons">
            <div class="title-bar-button" 
                onClick={minimizeWindow}>-</div>
            <div class="title-bar-button" 
                onClick={toggleMaximizeWindow}>o</div>
            <div class="title-bar-button"
                onClick={closeWindow}>x</div>
        </div>
    </div>
)

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        minimizeWindow,
        toggleMaximizeWindow,
        closeWindow
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(TitleBar)