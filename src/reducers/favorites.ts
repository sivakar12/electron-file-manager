import pathModule from 'path'

import {
    FavoritesActions,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    RENAME_FAVORITE
} from '../types/redux-actions'

import { FavoritesState } from '../types/redux-state'
import { FavoriteItem } from '../types/core';

const initialState:FavoritesState = []

export default function favorites(state: FavoritesState = initialState, action: FavoritesActions) {
    switch (action.type) {
        case ADD_FAVORITE:
            const { path } = action.payload
            const newFavorite: FavoriteItem = {
                path,
                name: pathModule.basename(path)
            }
            return [...state, newFavorite]
        case REMOVE_FAVORITE:
            return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index + 1)]
        case RENAME_FAVORITE:
            const newState: FavoritesState = [...state]
            newState[action.payload.index]['name'] = action.payload.newName
            return newState
        default:
            return state
    }
}