import React from 'react'
import _ from 'lodash'
import pathModule from 'path'

import { Path, ContentItem } from '../types/core';
import ColumnViewColumn from '../components/ColumnViewColumn';
import ColumnViewItem from '../components/ColumnViewItem';
import {
    OpenFolderAction,
    OPEN_FOLDER,
} from '../global-state/tabs';
import { openFile } from '../backend';
import { useTabs, useSelection } from '../global-state';

type Props = {
    path: Path,
    contents: ContentItem[]
    selectedItem: string | null;
}
export default function(props: Props) {
    const { tabsDispatch } = useTabs()

    function isItemSelected(item: ContentItem) {
        return item.path === props.selectedItem
    }
    function makeOnClickHandler(item: ContentItem) {
        return function() {
            const { setSelection } = useSelection()
            setSelection(item.path)
            if (item.isDirectory) {
                const openFolderAction: OpenFolderAction = {
                    type: OPEN_FOLDER,
                    payload: { path: item.path }
                }
                tabsDispatch(openFolderAction)
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
                tabsDispatch(action)
            } else {
                openFile(item.path)
            }
        }
    }
    return (
        <ColumnViewColumn name={pathModule.basename(props.path) || props.path}>
            {props.contents && props.contents.map(c => 
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