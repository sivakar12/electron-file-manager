import { combineReducers } from 'redux'

import tabs from './tabs'
import favorites from './favorites'

const rootReducer = combineReducers({
    tabs,
    favorites
})

export default rootReducer