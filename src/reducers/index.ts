import { combineReducers } from 'redux'

import tabs from './tabs'
import favorites from './favorites'
import view from './view'
import selection from './selection'

const rootReducer = combineReducers({
    tabs,
    favorites,
    view,
    selection,
})
export default rootReducer

export type AppState = ReturnType<typeof rootReducer>