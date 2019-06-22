import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import pathModule from 'path'
import _ from 'lodash'

import { AppState } from '../reducers';
import { Path, ContentItem } from '../types/core';
import { getFolderContents } from '../backend';
import ColumnViewColumn from '../components/ColumnViewColumn';
import ColumnViewItem from '../components/ColumnViewItem';

const NUMBER_OF_COLUMNS = 3

export default function() {
    const path = useSelector((state: AppState) => state.tabs.tabs[state.tabs.current])
    
    const columnPaths: Path[] = []
    let middlePath = path
    while(columnPaths.length < NUMBER_OF_COLUMNS) {
        if (middlePath === columnPaths[0]) break
        columnPaths.unshift(middlePath)
        middlePath = pathModule.dirname(middlePath)
    }
    
    const [columnContents, setColumnContents] = useState<ContentItem[][]>([])
    useEffect(() => {
        Promise.all(columnPaths.map(p => getFolderContents(p)))
            .then(contents => setColumnContents(contents))
    }, [path])


    return (
        <div className="column-view">
            {_.zip(columnPaths, columnContents).map(([path, contents]) => {
                return (
                    <ColumnViewColumn key={path} path={path}>
                      {contents && contents.map(c => <ColumnViewItem key={c.path} content={c}/>)}
                    </ColumnViewColumn>
                )
            })}
        </div>
    )
}