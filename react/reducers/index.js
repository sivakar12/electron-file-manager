import { combineReducers } from 'redux'

import path from './path'
import contents from './contents'
import tabs from './tabs'
import favorites from './favorites'

const rootReducer = combineReducers({
    path,
    contents,
    tabs,
    favorites
})

export default rootReducer