import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeFromStagingArea } from '../actions'

function mapStateToProps(state) {
    return {
        stagingArea: state.stagingArea
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeFromStagingArea }, dispatch)
}
class StagingArea extends Component {
    render() {
        if (!this.props.stagingArea.size) {
            return null
        }
        return (
            <div>
                <h2>Staging Area</h2>
                {JSON.stringify(this.props.stagingArea)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StagingArea)