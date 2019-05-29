/*
 * @Description: Merges all reducer and returns
 * @version:
 * @Author: GanEhank
 * @Date: 2019-05-22 20:07:51
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-05-29 16:33:11
 */
import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { chatuser } from './redux/chatuser.redux'
import { chat } from './redux/chat.redux'

export default combineReducers({
  user,
  chatuser,
  chat
})
