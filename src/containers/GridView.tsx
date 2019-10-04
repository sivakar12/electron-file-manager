import React, { useState, useEffect } from 'react'
import {
    changePath
} from '../global-state/tabs'
import { ContentItem } from '../types/core'

import GridViewItem from '../components/GridViewItem'
import GridViewComponent from '../components/GridView'

import { getFolderContents, openFile } from '../backend'
import { useCurrentPath, useSelection, useTabs } from '../global-state'

export default function() {

    const currentPath = useCurrentPath()
    const { selection, setSelection } = useSelection()
    
    const [contents, setContents] = useState<ContentItem[]>([])
    useEffect(() => {
        getFolderContents(currentPath).then(c => setContents(c))
    }, [currentPath])
    
    function isItemSelected (item: ContentItem) {
        return selection === item.path
    }

    function makeOnClickHandler(item: ContentItem) {
        return () => setSelection(item.path)
    }

    function makeOnDoubleClickHandler(item: ContentItem) {
        return function() {
            if (item.isDirectory) {
                changePath(item.path)
            } else {
                openFile(item.path)
            }
        }
    }
    return (
        <GridViewComponent>
            {contents.map(c => 
                <GridViewItem
                    {...c}
                    key={c.path}
                    onClick={makeOnClickHandler(c)}
                    onDoubleClick={makeOnDoubleClickHandler(c)}
                    isSelected={isItemSelected(c)}
                />
            )}
        </GridViewComponent>
    )
}