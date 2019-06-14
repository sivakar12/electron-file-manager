import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import pathModule from 'path'

import {
    AddFavoriteAction,
    ADD_FAVORITE,
    ChangePathAction,
    CHANGE_PATH
} from '../types/redux-actions'
import { AppState } from '../reducers'
import { FavoriteItem } from '../types/core';
import FavoriteItemComponent from '../components/FavoriteItem'
import FavoritePanel from '../components/FavoritesPanel'
import FavoritesPanel from '../components/FavoritesPanel';

export default function() {
    const state = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

    function handleAddFavorite(favorite: FavoriteItem) {
        const path = state.tabs.tabs[state.tabs.current]
        const name = pathModule.basename(path)
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
            dispatch(action)
        }
    }

    return (
        <FavoritesPanel onAddFavorite={handleAddFavorite}>
            {state.favorites.map(f =>(
                <FavoriteItemComponent
                    name={f.name}
                    key={f.path}
                    onClick={makeOnclickHandler(f)}/>
            ))}
        </FavoritesPanel>
    )
}