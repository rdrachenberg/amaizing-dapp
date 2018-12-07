import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import { nameReducer } from 'core/reducers/reducer-name'
import uiReducer from 'core/reducers/reducer-ui'

const rootReducer = combineReducers({
  provider: providerReducer,
  name: nameReducer,
  ui: uiReducer
})

export default rootReducer
