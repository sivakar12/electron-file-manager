import React from 'react'
import { connect }from 'react-redux'
import { 
    Tabs,
    Path,
    Contents,
    Favorites,
    TitleBar,
    StagingArea,
    Properties
 } from '.'

const mapStateToProps = (state) => ({
    view: state.view
})
const MainLayout = (props) => (
    <div>
        <div id="container">
                <div id="title-bar">
                    <TitleBar/>
                </div>
                <div id="path-bar">
                    <Path/>
                </div>
                <div id="contents">
                    <Contents/>
                </div>
                { props.view.properties && <div id="properties">
                    <Properties/>
                </div> }
                { props.view.favorites && 
                <div id="favorites">
                    <Favorites/>
                </div> }
                <div id="staging-area">
                    <StagingArea/>
                </div>
            </div>
    </div>
)
export default connect(mapStateToProps)(MainLayout)