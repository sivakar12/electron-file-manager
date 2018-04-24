import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { goToParentFolder } from '../actions'
function mapStateToProps(state) {
    return {
        path: state.tabs.tabs[state.tabs.current]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ goToParentFolder }, dispatch)
}
function Path(props) {
    return (
        <div>
            <h2>
                <span
                    style={{paddingRight: '10px'}} 
                    onClick={() => { props.goToParentFolder() }}>{'<-'}</span>
                {props.path}
            </h2>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Path)