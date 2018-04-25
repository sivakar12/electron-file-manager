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
import Tabs from './Tabs'
import Path from './Path'

const MainLayout = (props) => (
    <div>
        <Tabs/>
        {/* <h2>{props.path}</h2> */}
        <Path/>
        {/* <button onClick={() => props.addFavorite(props.path)}>Add to favorites</button> */}
        {/* <button style={{float: 'left'}} onClick={props.goToParentFolder}>Up</button> */}
        <FileList>
            {props.contents.map(file => 
                <File key={file.name}
                    filename={file.name} 
                    onClick={() => props.openFolder(file.name)}/>
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