import React from 'react'
import { Path } from '../types/core';

type Props = {
    name: string;
    children: JSX.Element[];
}
export default (props: Props) => (
    <div className="column-view-column">
        <div className="column-view-column-name">{props.name || ' '}</div>
        <div className='column-view-column-items'>
            {props.children}
        </div>
    </div>
)
