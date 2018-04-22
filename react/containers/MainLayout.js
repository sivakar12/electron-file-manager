import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openFolder, goToParentFolder } from '../actions'
import { FileList, File } from '../components'

const MainLayout = (props) => (
    <div>
        <h2>Path: {props.path}</h2>
        <button style={{float: 'right'}} onClick={props.goToParentFolder}>Up</button>
        <FileList>
            {props.filenames.map(filename => 
                <File key={filename}
                    filename={filename} 
                    onClick={() => props.openFolder(filename)}/>
            )}
        </FileList>
    </div>
)

const mapStateToProps = state => state
export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({openFolder, goToParentFolder}, dispatch)
)(MainLayout)