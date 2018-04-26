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
        {/* empty space */}
        </div>
        <div className="title-bar-buttons">
            <div className="title-bar-button" 
                onClick={props.minimizeWindow}>-</div>
            <div className="title-bar-button" 
                onClick={props.toggleMaximizeWindow}>o</div>
            <div className="title-bar-button"
                onClick={props.closeWindow}>x</div>
        </div>
    </div>
)

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        minimizeWindow,
        toggleMaximizeWindow,
        closeWindow
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)