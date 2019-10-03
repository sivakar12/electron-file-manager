import React, { useEffect, useState } from 'react'
import pathModule from 'path'
import _ from 'lodash'

import { Path, ContentItem } from '../types/core';
import { getFolderContents } from '../backend';
import ColumnContainer from './ColumnViewColumn'
import ColumnView from '../components/ColumnView'
import { useCurrentPath, useSelection } from '../global-state';

const NUMBER_OF_COLUMNS = 3

export default function() {
    const path = useCurrentPath()
    const { selection } = useSelection()

    const columnPaths: Path[] = []
    let middlePath = path
    while(columnPaths.length < NUMBER_OF_COLUMNS) {
        if (middlePath === columnPaths[0]) break
        columnPaths.unshift(middlePath)
        middlePath = pathModule.dirname(middlePath)
    }
    const selectedPaths: (Path| null)[] = _.drop(columnPaths, 1)
    selectedPaths.push(selection)
    
    const [columnContents, setColumnContents] = useState<ContentItem[][]>(columnPaths.map(() => []))

    useEffect(() => {
        Promise.all(columnPaths.map(p => getFolderContents(p)))
            .then(contents => setColumnContents(contents))
    }, [path])

    return (
        <ColumnView>
            {columnPaths.map((path, index) =>
                <ColumnContainer
                    key={path}
                    path={path}
                    contents={columnContents[index]}
                    selectedItem={selectedPaths[index]}
                />
            )}
        </ColumnView>
    )
}