import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    AddFavoriteAction,
    ADD_FAVORITE,
    ToggleFavoritesAction,
    TOGGLE_FAVORITES,
} from '../types/redux-actions'
import {
    CHANGE_PATH,
    ChangePathAction
} from '../global-state/tabs'
import { AppState } from '../reducers'
import { FavoriteItem } from '../types/core';
import FavoriteItemComponent from '../components/FavoriteItem'
import FavoritesPanel from '../components/FavoritesPanel';
import { useCurrentPath, useTabs } from '../global-state'

export default function() {
    const state = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

    const { tabsDispatch } = useTabs()
    function handleAddFavorite(favorite: FavoriteItem) {
        const path = useCurrentPath()
        const action: AddFavoriteAction = {
            type: ADD_FAVORITE,
            payload: {
                path
            }
        }
        dispatch(action)
    }
    function makeOnclickHandler(favorite: FavoriteItem) {
        const action: ChangePathAction = {
            type: CHANGE_PATH,
            payload: {
                path: favorite.path
            }
        }
        return function() {
            tabsDispatch(action)
        }
    }
    function handleCloseFavorite() {
        const action: ToggleFavoritesAction = {
            type: TOGGLE_FAVORITES
        }
        dispatch(action)
    }

    return (
        <FavoritesPanel 
            onAddFavorite={handleAddFavorite}
            onClose={handleCloseFavorite}
            >
            {state.favorites.map(f =>(
                <FavoriteItemComponent
                    name={f.name}
                    key={f.path}
                    onClick={makeOnclickHandler(f)}/>
            ))}
        </FavoritesPanel>
    )
}