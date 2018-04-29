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
        if (this.props.stagingArea.size == 0) {
            return null
        }
        const itemsArray = this.props.stagingArea.valueSeq().toArray()
        return (
            <StagingAreaComponent>
                {itemsArray.map(i => (
                    <StagingAreaItem 
                        key={i.path} path={i.path} onRemove={() => 
                        this.props.removeFromStagingArea(i.path)}/>
                ))}
            </StagingAreaComponent>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StagingArea)