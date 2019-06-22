import React from 'react'
import { Path, ContentItem } from '../types/core';
import ColumnViewColumn from '../components/ColumnViewColumn';
import ColumnViewItem from '../components/ColumnViewItem';

type Props = {
    path: Path,
    contents: ContentItem[]
    level: number
}
export default function(props: Props) {

    return (
        <ColumnViewColumn>
            {props.contents.map(c => 
                <ColumnViewItem content={c}/>
            )}
            {/* {JSON.stringify(props.contents)} */}
        </ColumnViewColumn>
    )
}