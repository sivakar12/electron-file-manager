import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
    openFolder, 
    goToParentFolder, 
    addFavorite
} from '../actions'
import { FileList, File } from '../components'
import Favorites from './Favorites'

const MainLayout = (props) => (
    <div>
        <h2>Path: {props.path}</h2>
        <button onClick={() => props.addFavorite(props.path)}>Add to favorites</button>
        <button style={{float: 'left'}} onClick={props.goToParentFolder}>Up</button>
        <FileList>
            {props.contents.map(filename => 
                <File key={filename}
                    filename={filename} 
                    onClick={() => props.openFolder(filename)}/>
            )}
        </FileList>
        <Favorites/>
    </div>
)

const mapStateToProps = state => ({ 
    path: state.tabs.tabs[state.tabs.current],
    contents: state.contents
})
export default connect(
    mapStateToProps, 
    dispatch => bindActionCreators({
        openFolder, 
        goToParentFolder,
        addFavorite
    }, dispatch)
)(MainLayout)