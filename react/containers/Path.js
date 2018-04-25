import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { goToParentFolder } from '../actions'
import { PathBar } from '../components'

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
        <PathBar
            path={props.path}
            onGoUp={props.goToParentFolder}/>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Path)