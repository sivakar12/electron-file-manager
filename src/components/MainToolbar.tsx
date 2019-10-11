import React from 'react'
import { Path } from '../types/core'

type Props = {
    path: Path,
    onGoUp: () => void,
    onSetGridView: () => void,
    onSetColumnView: () => void
}
export default (props: Props) => (
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