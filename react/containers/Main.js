import React from 'react'
import { connect } from 'react-redux'

const Main = (props) => (
    <h6>Path: {props.path}</h6>
)

const mapStateToProps = state => state
export default connect(mapStateToProps)(Main)