import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import PropertiesComponent from '../components/Properties'
import { AppState } from '../reducers';
import { Path, PropertiesItem } from '../types/core';
import { getFileDetails, getFolderSize } from '../backend';

export default function() {
    const { tabs, selection } = useSelector((state: AppState) => state)
    let currentPath: Path = selection || tabs.tabs[tabs.current]
    
    const [details, setDetails] = useState<PropertiesItem | null>(null)
    useEffect(() => {
        getFileDetails(currentPath).then(d => setDetails(d))
    }, [currentPath])

    const [size, setSize] = useState<number>(0)
    const [loadingSize, setLoadingSize] = useState<boolean>(false)
    useEffect(() => {
        setLoadingSize(true)
        const folderSizeObserver = getFolderSize(currentPath)
        const subscription = folderSizeObserver.subscribe(
            size => setSize(size),
            error => setSize(0),
            () => setLoadingSize(false)
        )
        return () => { subscription.unsubscribe(); setSize(0) }
    }, [currentPath])
    return <PropertiesComponent properties={details} loadingSize={loadingSize} size={size}/>
}