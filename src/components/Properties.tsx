import React from 'react'
import _ from 'lodash'
import fileSize from 'filesize'
import { PropertiesItem } from '../types/core';

type Props = {
    properties?: PropertiesItem,
    folderSize?: number,
    loadingFolderSize?: boolean
    folderSizeError?:boolean
}
export default function Properties(props: Props) {

    return (
        <div className="properties">
            <h3 className="properties-title">Properties</h3>
            {props.properties && _.entries(props.properties).map(([key, value]) => (
                <div key={key} className="properties-item">
                    <div className="properties-item-key">{key}</div>
                    <div className="properties-item-value">{value.toString()}</div>
                </div>
            ))}
            {/* TODO: Move logic to container */}
            <h2>Folder Size: {!props.folderSizeError && props.folderSize 
                && fileSize(props.folderSize)} {props.loadingFolderSize 
                && !props.folderSizeError && '*'}</h2>
        </div>
    )
}