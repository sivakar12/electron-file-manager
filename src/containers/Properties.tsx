import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import PropertiesComponent from '../components/Properties'
import { AppState } from '../reducers';
import { Path, PropertiesItem } from '../types/core';
import { getFileDetails, getFolderSize } from '../backend';

export default function() {
    const { selection } = useSelector((state: AppState) => state)
    return (
        <PropertiesComponent
            properties={selection.properties}
            loadingFolderSize={selection.loadingFolderSize}
            folderSizeError={selection.folderSizeTimeout}
            folderSize={selection.folderSize}
        />
    )
}