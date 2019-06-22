import React from 'react'
import { Path } from '../types/core';

type Props = {
    path: Path;
    children: Element[];
    level: number;
}
export default (props: any) => (
    <div className='column-view-column'>
        {props.path}
        {props.children}
    </div>
)
