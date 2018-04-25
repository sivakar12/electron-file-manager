import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { openFolder } from '../actions'
import { FileList, File } from '../components'

const Contents = (props) => (
    <FileList>
        {props.contents.map(file => 
            <File key={file.name}
                filename={file.name} 
                onClick={() => props.openFolder(file.name)}/>
        )}
    </FileList>
)

const mapStateToProps = state => ({ 
    contents: state.contents
})
export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({
        openFolder, 
    }, dispatch)
)(Contents)