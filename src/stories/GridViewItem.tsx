import React from 'react'

import { ContentItem } from '../types/core'
import GridViewItem from '../components/GridViewItem'

export default { title: 'GridViewItem' }

const folderDetails: ContentItem = {
    path: '/FRIENDS/Season 1',
    isDirectory: true,
    name: 'Season 1'
}
export const folderNotSelected = () => <GridViewItem 
    {...folderDetails}
    onClick={() => {}}
    onDoubleClick={() => {}}
    isSelected={false}
/>

export const folderSelected = () => <GridViewItem 
    {...folderDetails}
    onClick={() => {}}
    onDoubleClick={() => {}}
    isSelected={true}
/>
