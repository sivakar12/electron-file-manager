import React, { useState } from 'react'
import pathModule from 'path'

import {
    changePath
} from '../global-state/tabs'
import { FavoriteItem } from '../types/core';
import FavoriteItemComponent from '../components/FavoriteItem'
import FavoritesPanel from '../components/FavoritesPanel';
import { useCurrentPath, useTabs, useViewState } from '../global-state'

export default function() {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([])
    const { tabsDispatch } = useTabs()
    const path = useCurrentPath()
    const { viewState, setViewState } = useViewState()

    function handleAddFavorite() {
        setFavorites([...favorites, {path}])
    }

    function makeOnclickHandler(favorite: FavoriteItem) {
        return function() {
            tabsDispatch(changePath(favorite.path))
        }
    }
    function handleCloseFavorite() {
        setViewState({...viewState, favorites: false})
    }

    return (
        <FavoritesPanel 
            onAddFavorite={handleAddFavorite}
            onClose={handleCloseFavorite}
            >
            {favorites.map(f =>(
                <FavoriteItemComponent
                    name={f.name || pathModule.basename(f.path)}
                    key={f.path}
                    onClick={makeOnclickHandler(f)}/>
            ))}
        </FavoritesPanel>
    )
}