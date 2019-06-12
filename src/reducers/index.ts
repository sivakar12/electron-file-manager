import { combineReducers } from 'redux'

import tabs from './tabs'
import contents from './contents'
import favorites from './favorites'
import view from './view'

const rootReducer = combineReducers({
    tabs,
    contents,
    favorites,
    view
})
export default rootReducer

export type AppState = ReturnType<typeof rootReducer>