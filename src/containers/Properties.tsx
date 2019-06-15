import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import PropertiesComponent from '../components/Properties'
import { AppState } from '../reducers';
import { ContentItem } from '../types/core';

export default function() {
    const { tabs, selection, contents } = useSelector((state: AppState) => state)
    let currentItem: ContentItem | undefined;
    if (selection) {
        currentItem = _.find(contents, item => item.path === selection)
    }
    return <PropertiesComponent {...currentItem}/>
}