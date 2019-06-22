import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import pathModule from 'path'
import _ from 'lodash'

import { AppState } from '../reducers';
import { Path, ContentItem } from '../types/core';
import { getFolderContents } from '../backend';
import ContentColumn from '../components/ContentColumn';
import ContentColumnItem from '../components/ContentColumnItem';

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
        <div className="contents-column-view">
            {_.zip(columnPaths, columnContents).map(([path, contents]) => {
                return (
                    <ContentColumn key={path} path={path}>
                      {contents && contents.map(c => <ContentColumnItem key={c.path} content={c}/>)}
                    </ContentColumn>
                )
            })}
        </div>
    )
}