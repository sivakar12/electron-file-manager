// @flow

import actionTypes from './actionTypes'
import { FavoritesState } from '../types'
export function addFavorite(path: string) {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload: { path }
    }
}
export type AddFavoriteAction = {
    type: string,
    payload: {
        path: string
    }
}
export function removeFavorite(hash: string) {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        payload: { hash }
    }
}

export type RemoveFavoriteAction = {
    type: string,
    payload: {
        hash: string
    }
}
export function renameFavorite(hash: string, newName: string) {
    return {
        type: actionTypes.RENAME_FAVORITE,
        payload: { hash, newName }
    }
}

export type RenameFavoriteType = {
    type: string,
    payload: {
        hash: string,
        newName: string
    }
}

export function loadFavorites(favorites: FavoritesState) {
    return {
        type: actionTypes.LOAD_FAVORITES,
        payload: favorites
    }
}

export type LoadFavoritesType = {
    type: string,
    payload: FavoritesState
}

export type FavoritesActionType = AddFavoriteAction | RemoveFavoriteAction |
    RenameFavoriteType | LoadFavoritesType