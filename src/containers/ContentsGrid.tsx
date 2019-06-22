import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    OpenFolderAction,
    OpenFileAction,
    SelectItemAction,
    OPEN_FOLDER,
    OPEN_FILE,
    SELECT_ITEM
} from '../types/redux-actions'
import { AppState } from '../reducers'
import { ContentItem } from '../types/core'

import ContentsGridItem from '../components/ContentsGridItem'
import ContentsGridView from '../components/ContentsGrid'

export default function() {
    const { contents, selection } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

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
                const action: OpenFileAction = {
                    type: OPEN_FILE,
                    payload: { path: item.path }
                }
                dispatch(action)
            }
        }
    }
    return (
        <ContentsGridView>
            {contents.map(c => 
                <ContentsGridItem 
                    {...c}
                    key={c.path}
                    onClick={makeOnClickHandler(c)}
                    onDoubleClick={makeOnDoubleClickHandler(c)}
                    isSelected={isItemSelected(c)}
                />
            )}
        </ContentsGridView>
    )
}