import React from 'react'
import { connect } from 'react-redux'
import path from 'path'
import _ from 'lodash'

import { Properties as PropertiesComponent } from '../components'

const Properties = props => <PropertiesComponent data={props.data}/>

function mapStateToProps(state) {
    if (!state.selection)
        return { data: null }
    const contentItem = _.find(state.contents, 
        { name: path.basename(state.selection) })
    return {
        data: contentItem
    }
}

export default connect(mapStateToProps)(Properties)