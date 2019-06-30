import React from 'react'
import _ from 'lodash'
import fileSize from 'filesize'
import { PropertiesItem } from '../types/core';

type Props = {
    properties?: PropertiesItem,
    folderSize?: number,
    loadingFolderSize?: boolean
    folderSizeError?:boolean,
    onClose: () => void
}
export default function Properties(props: Props) {

    return (
        <div className="properties">
            <div className="properties-header">
                <div className="properties-close" onClick={props.onClose}>x</div>
                <div className="properties-title">Properties</div>
            </div>
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