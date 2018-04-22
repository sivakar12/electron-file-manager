import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openFolder } from '../actions'
const MainLayout = (props) => (
    <div>
        <h2>Path: {props.path}</h2>
        <ul>
            {props.filenames.map(filename => 
                <li key={filename}><a onClick={() => props.openFolder(filename)}>{filename}</a></li>
            )}
        </ul>
    </div>
)

const mapStateToProps = state => state
export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({openFolder}, dispatch)
)(MainLayout)