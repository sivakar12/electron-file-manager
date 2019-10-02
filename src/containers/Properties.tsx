import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PropertiesComponent from '../components/Properties'
import { AppState } from '../reducers';
import { TogglePropertiesAction, TOGGLE_PROPERTIES } from '../types/redux-actions';
import { PropertiesItem } from '../types/core';
import { getFileDetails, getFolderSize } from '../backend';
import { observable } from 'rxjs';

export default function() {

    const { tabs, selection } = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

    const path = selection || tabs.tabs[tabs.current]

    const [properties, setProperties] = useState<PropertiesItem>(null)
    const [folderSize, setFolderSize] = useState<number>(0)
    const [loading, setLoading] = useState(false)
    const [timeout, setTimeout] = useState(false)

    useEffect(() => {
        getFileDetails(path)
            .then(properties => setProperties(properties))
    }, [path])

    useEffect(() => {
        if (properties && properties.isDirectory) {
            const subscription = getFolderSize(path).subscribe(
                size => {
                    console.log(size)
                    setFolderSize(size)
                    setLoading(true)
                    setTimeout(false)
                },
                error => {
                    setLoading(false)
                    setTimeout(true)
                },
                () => {
                    setLoading(false)
                }
            )
            return () => {
                console.log('Unsubscribing from get folder size')
                subscription.unsubscribe()
            }
        }
    }, [path])

    function handleOnClose() { 
        const action: TogglePropertiesAction = {
            type: TOGGLE_PROPERTIES
        }
        dispatch(action)
    }
    return (
        <PropertiesComponent
            properties={properties}
            loadingFolderSize={loading}
            folderSizeError={timeout}
            folderSize={folderSize}
            onClose={handleOnClose}
        />
    )
}