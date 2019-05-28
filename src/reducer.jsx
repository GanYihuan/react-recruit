import { combineReducers } from 'redux' // merge all reducers & return
import { counter } from './redux'
import { auth } from './Auth.redux'

export default combineReducers({
  counter,
  auth
})
