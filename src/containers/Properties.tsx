import React from 'react'
import { useSelector } from 'react-redux'

import PropertiesComponent from '../components/Properties'
import { AppState } from '../reducers';

export default function() {
    const { properties } = useSelector((state: AppState) => state)
    return (
        <PropertiesComponent
            properties={properties.properties}
            loadingFolderSize={properties.loadingFolderSize}
            folderSizeError={properties.folderSizeTimeout}
            folderSize={properties.folderSize}
        />
    )
}