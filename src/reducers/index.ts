import { combineReducers } from 'redux'

import tabs from './tabs'
import contents from './contents'
import favorites from './favorites'
import view from './view'
import selection from './selection'
import transfers from './transfers'
import properties from './properties'

const rootReducer = combineReducers({
    tabs,
    contents,
    favorites,
    view,
    selection,
    transfers,
    properties
})
export default rootReducer

export type AppState = ReturnType<typeof rootReducer>