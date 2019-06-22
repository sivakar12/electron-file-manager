import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    AddFavoriteAction,
    ADD_FAVORITE,
    ChangePathAction,
    CHANGE_PATH,
    ToggleFavoritesAction,
    TOGGLE_FAVORITES,
} from '../types/redux-actions'
import { AppState } from '../reducers'
import { FavoriteItem } from '../types/core';
import FavoriteItemComponent from '../components/FavoriteItem'
import FavoritesPanel from '../components/FavoritesPanel';

export default function() {
    const state = useSelector((state: AppState) => state)
    const dispatch = useDispatch()

    function handleAddFavorite(favorite: FavoriteItem) {
        const path = state.tabs.tabs[state.tabs.current]
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