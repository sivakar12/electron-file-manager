import React from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash'
import pathModule from 'path'

import { Path, ContentItem } from '../types/core';
import ColumnViewColumn from '../components/ColumnViewColumn';
import ColumnViewItem from '../components/ColumnViewItem';
import {
    OpenFolderAction,
    SelectItemAction,
    SELECT_ITEM,
    OPEN_FOLDER,
    OpenFileAction,
    OPEN_FILE
} from '../types/redux-actions';

type Props = {
    path: Path,
    contents: ContentItem[]
    selectedItem: string | null;
}
export default function(props: Props) {
    const dispatch = useDispatch()

    function isItemSelected(item: ContentItem) {
        return item.path === props.selectedItem
    }
    function makeOnClickHandler(item: ContentItem) {
        return function() {
            const selectItemAction: SelectItemAction = {
                type: SELECT_ITEM,
                payload: { path: item.path }
            }
            dispatch(selectItemAction)
            if (item.isDirectory) {
                const openFolderAction: OpenFolderAction = {
                    type: OPEN_FOLDER,
                    payload: { path: item.path }
                }
                dispatch(openFolderAction)
            }
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
        <ColumnViewColumn name={pathModule.basename(props.path) || props.path}>
            {props.contents.map(c => 
                <ColumnViewItem
                    key={c.path} 
                    content={c}
                    onClick={makeOnClickHandler(c)}
                    onDoubleClick={makeOnDoubleClickHandler(c)}
                    isSelected={isItemSelected(c)}
                />
            )}
        </ColumnViewColumn>
    )
}