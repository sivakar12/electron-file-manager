// @flow

import actionTypes from '../actions/actionTypes'
import pathModule from 'path'
import md5 from 'md5'
import _ from 'lodash'

import type { FavoritesActionTypes } from '../actions/favorites'
import type { FavoritesState } from '../types'

const initialState = {}
export default function favorites(state: FavoritesState = initialState,
        action: FavoritesActionTypes) {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE:
            const { path } = action.payload
            const newFavorite = {
                path,
                name: pathModule.basename(path)
            }
            const hash = md5(action.payload.path)
            return Object.assign({}, state, {
                [hash]: newFavorite
            })
        case actionTypes.REMOVE_FAVORITE:
            return _.omit(state, action.payload.hash)
        case actionTypes.RENAME_FAVORITE:
            return _.assign(state, {
                [action.payload.hash]: {
                    name: action.payload.newName
                }
            })
        case actionTypes.LOAD_FAVORITES:
            return action.payload
        default:
            return state
    }
}