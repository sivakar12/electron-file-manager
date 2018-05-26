import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeFromStagingArea } from '../actions'
import { StagingArea as StagingAreaComponent, StagingAreaItem } from '../components'

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
        if (this.props.stagingArea.length == 0) {
            return null
        }
        return (
            <StagingAreaComponent>
                {this.props.stagingArea.map((item, index) => (
                    <StagingAreaItem 
                        key={index} path={item.path} onRemove={() => 
                        this.props.removeFromStagingArea(index)}/>
                ))}
            </StagingAreaComponent>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StagingArea)