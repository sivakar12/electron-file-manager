import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { newTab, switchTab, closeTab } from '../actions'

function mapStateToProps(state) {
    return {
        tabs: state.tabs.tabs,
        current: state.tabs.current
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        newTab,
        switchTab,
        closeTab
    }, dispatch)
}
const Tabs = (props) => (
    <div>
        <h3>Tabs</h3>
        <div>{JSON.stringify(props)}</div>
        {props.tabs.map((t, i) => 
            <span key={i} style={{ padding: '5px'}}
                onClick={() => props.switchTab(i)}>{t}</span>
        )}
        <button onClick={() => props.newTab()}>New Tab</button>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)