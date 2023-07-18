import { combineReducers } from 'redux'

import storiesReducer from '../features/stories/storiesSlice'

const rootReducer = combineReducers({
   stories: storiesReducer,
})

export default rootReducer



