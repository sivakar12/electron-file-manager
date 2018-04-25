import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { openFolder } from '../actions'
import { FileList, File } from '../components'


class Contents extends Component {
    constructor() {
        super()
        this.makeOnClickHandler = this.makeOnClickHandler.bind(this)
    }
    makeOnClickHandler(item) {
        const self = this
        return function() {
            if (item.isDir) {
                self.props.openFolder(item.name)
            } else {
                console.log(`Opening file ${item.name}`)
            }
        }
    }
    render() {
        return (
            <FileList>
                {this.props.contents.map(file => 
                    <File key={file.name}
                        filename={file.name} 
                        onClick={this.makeOnClickHandler(file)}/>
                )}
            </FileList>
        )
    }
}

const mapStateToProps = state => ({ 
    contents: state.contents
})
export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({
        openFolder, 
    }, dispatch)
)(Contents)