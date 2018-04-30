import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import pathModule from 'path'

import { openFolder, selectItem } from '../actions'
import { FileList, File } from '../components'


class Contents extends Component {
    constructor() {
        super()
        this.makeOnClickHandler = this.makeOnClickHandler.bind(this)
        this.isFileSelected = this.isFileSelected.bind(this)
    }
    makeOnClickHandler(item) {
        const self = this
        return function() {
            const selectedPath = pathModule.join(self.props.path, item.name)
            self.props.selectItem(selectedPath)
        }
    }
    makeOnDoubleClickHandler(item) {
        const self = this
        return function() {
            if (item.isDir) {
                self.props.openFolder(item.name)
            } else {
                console.log(`Opening file ${item.name}`)
            }
        }
    }
    isFileSelected(filename) {
        return this.props.selection && 
            filename == pathModule.basename(this.props.selection)
    }
    render() {
        return (
            <FileList>
                {this.props.contents.map(file => 
                    <File key={file.name}
                        filename={file.name}
                        isDir={file.isDir}
                        isSelected={this.isFileSelected(file.name)}
                        onClick={this.makeOnClickHandler(file)} 
                        onDoubleClick={this.makeOnDoubleClickHandler(file)}/>
                )}
            </FileList>
        )
    }
}

const mapStateToProps = state => ({ 
    contents: state.contents,
    path: state.tabs.tabs[state.tabs.current],
    selection: state.selection
})
export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({
        openFolder,
        selectItem 
    }, dispatch)
)(Contents)