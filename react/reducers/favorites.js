import actionTypes from '../actions/actionTypes'
import pathModule from 'path'
import md5 from 'md5'
import _ from 'lodash'

const initialState = {}
export default function favorites(state = initialState, action) {
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
            if (action.payload)
                return action.payload
            else
                return state
        default:
            return state
    }
}