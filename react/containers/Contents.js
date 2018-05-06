import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import pathModule from 'path'

import { openFolder, openFile, selectItem } from '../actions'
import { ContentsList, ContentsItem } from '../components'


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
                self.props.openFile(item.name)
            }
        }
    }
    isFileSelected(filename) {
        return this.props.selection && 
            filename == pathModule.basename(this.props.selection)
    }
    render() {
        return (
            <ContentsList>
                {this.props.contents.map(file => 
                    <ContentsItem key={file.name}
                        filename={file.name}
                        isDir={file.isDir}
                        isSymLink={file.isSymLink}
                        size={file.size}
                        isSelected={this.isFileSelected(file.name)}
                        onClick={this.makeOnClickHandler(file)} 
                        onDoubleClick={this.makeOnDoubleClickHandler(file)}/>
                )}
            </ContentsList>
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
        openFile,
        selectItem 
    }, dispatch)
)(Contents)