import { combineReducers } from "redux"
import TempReducer from './temp_reducer'

const rootReducer = combineReducers({
  temp: TempReducer
})

export default rootReducer
