import { combineReducers } from 'redux'

import contents from './contents'
import tabs from './tabs'
import favorites from './favorites'

const rootReducer = combineReducers({
    contents,
    tabs,
    favorites
})

export default rootReducer