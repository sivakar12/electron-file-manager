import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import pathModule from 'path'
import _ from 'lodash'

import { AppState } from '../reducers';
import { Path, ContentItem } from '../types/core';
import { getFolderContents } from '../backend';
import ColumnContainer from './ColumnViewColumn'
import ColumnView from '../components/ColumnView'


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
    
    const [columnContents, setColumnContents] = useState<ContentItem[][]>(columnPaths.map(() => []))
    useEffect(() => {
        Promise.all(columnPaths.map(p => getFolderContents(p)))
            .then(contents => setColumnContents(contents))
    }, [path])

    return (
        <ColumnView>
            {columnPaths.map((path, index) =>
                <ColumnContainer path={path} contents={columnContents[index]} level={columnPaths.length - index}/>
            )}
        </ColumnView>
    )
}