import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    OpenFolderAction,
    SelectItemAction,
    OPEN_FOLDER,
    SELECT_ITEM
} from '../types/redux-actions'
import { AppState } from '../reducers'
import { ContentItem } from '../types/core'

import GridViewItem from '../components/GridViewItem'
import GridViewComponent from '../components/GridView'

import { getFolderContents, openFile } from '../backend'

export default function() {
    const { selection, tabs } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

    const currentPath = tabs.tabs[tabs.current]
    const [contents, setContents] = useState<ContentItem[]>([])
    useEffect(() => {
        getFolderContents(currentPath).then(c => setContents(c))
    }, [currentPath])
    
    function isItemSelected(item: ContentItem) {
        return selection === item.path
    }
    function makeOnClickHandler(item: ContentItem) {
        return function() {
            const action: SelectItemAction = {
                type: SELECT_ITEM,
                payload: { path: item.path }
            }
            dispatch(action)
        }
    }

    function makeOnDoubleClickHandler(item: ContentItem) {
        return function() {
            if (item.isDirectory) {
                const action: OpenFolderAction = {
                    type: OPEN_FOLDER,
                    payload: { path: item.path }
                }
                dispatch(action)
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