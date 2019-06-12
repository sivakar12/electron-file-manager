import { combineReducers } from 'redux'

import tabs from './tabs'
import contents from './contents'
import favorites from './favorites'
import view from './view'

export default combineReducers({
    tabs,
    contents,
    favorites,
    view
})