// @flow
import { combineReducers } from 'redux'

import contents from './contents'
import tabs from './tabs'
import favorites from './favorites'
import stagingArea from './staging-area'

const rootReducer = combineReducers({
    contents,
    tabs,
    favorites,
    stagingArea
})

export default rootReducer