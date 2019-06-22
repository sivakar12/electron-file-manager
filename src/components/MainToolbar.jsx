import React from 'react'
export default props => (
    <div className="main-toolbar">
        <div className="main-toolbar-up-button"
                onClick={() => props.onGoUp()}>
            {'<-'}
        </div>
        <div className="main-toolbar-path-string">
            {props.path}
        </div>
        <div className="main-toolbar-view-types">
            <div className="main-toolbar-view-type" onClick={props.onSetGridView}>Grid</div>
            <div className="main-toolbar-view-type" onClick={props.onSetColumnView}>Column</div>
        </div>
    </div>
)