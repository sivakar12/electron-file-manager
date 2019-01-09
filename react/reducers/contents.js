import pathModule from 'path'
import _ from 'lodash'

import actionTypes from '../actions/actionTypes'

const initialState = []

export default function contentsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CONTENTS:
            const sorted = _.orderBy(action.payload.contents, ['isDir', 'name'], ['desc', 'asc'])
            return sorted
        case actionTypes.OPEN_FOLDER:
            return []
        case actionTypes.GO_TO_PARENT_FOLDER:
            return []
        default:
            return state
    }
}