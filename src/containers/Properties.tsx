import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PropertiesComponent from '../components/Properties'
import { AppState } from '../reducers';
import { TogglePropertiesAction, TOGGLE_PROPERTIES } from '../types/redux-actions';

export default function() {
    const { properties } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()
    function handleOnClose() { 
        const action: TogglePropertiesAction = {
            type: TOGGLE_PROPERTIES
        }
        dispatch(action)
    }
    return (
        <PropertiesComponent
            properties={properties.properties}
            loadingFolderSize={properties.loadingFolderSize}
            folderSizeError={properties.folderSizeTimeout}
            folderSize={properties.folderSize}
            onClose={handleOnClose}
        />
    )
}