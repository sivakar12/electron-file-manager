import { combineReducers } from 'redux'

import favorites from './favorites'
import view from './view'
import selection from './selection'

const rootReducer = combineReducers({
    favorites,
    view,
    selection,
})
export default rootReducer

export type AppState = ReturnType<typeof rootReducer>