import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { newTab, switchTab, closeTab } from '../actions'
import { TabBar, TabItem } from '../components'

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
        <TabBar
            onNewTab={() => props.newTab()}>
            {props.tabs.map((t, i) => 
                <TabItem key={i}
                    path={t}
                    active={i == props.current}
                    onClose={() => props.closeTab(i)}
                    onClick={() => props.switchTab(i)}/>
            )}
        </TabBar>
        <div>{JSON.stringify(props)}</div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)