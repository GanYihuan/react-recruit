import axios from 'axios'
import io from 'socket.io-client'

const socket = io('ws://localhost:9093')
const MSG_LIST = 'MSG_LIST' // 获取聊天列表
const MSG_RECV = 'MSG_RECV' // 读取信息
const MSG_READ = 'MSG_READ' // 标识已读

const initState = {
  chatmsg: [],
  users: {},
  unread: 0
}

export function chat(state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      return {
        ...state,
        users: action.payload.users,
        chatmsg: action.payload.msgs,
        unread: action.payload.msgs.filter(v => !v.read && v.to === action.payload.userid).length
      }
    case MSG_RECV:
      const n = action.payload.to === action.userid ? 1 : 0
      return { ...state, chatmsg: [...state.chatmsg, action.payload], unread: state.unread + n }
      // case MSG_RECV:
    case MSG_READ:
      const { from, num } = action.payload
      return {
        ...state,
        chatmsg: state.chatmsg.map(v => ({ ...v, read: from === v.from ? true : v.read })),
        unread: state.unread - num
      }
    default:
      return state
  }
}

function msgList(msgs, users, userid) {
  return { type: MSG_LIST, payload: { msgs, users, userid }}
}

function msgRecv(msg, userid) {
  return { userid, type: MSG_RECV, payload: msg }
}

function msgRead({ from, userid, num }) {
  return { type: MSG_READ, payload: { from, userid, num }}
}

// export function readMsg(from) {
//   return async (dispatch, getState) => {
//     axios
//         .post('/user/readmsg', {from})
//         .then(res => {
//           const userid = getState().user._id
//           if (res.status === 200 && res.data.code === 0) {
//             dispatch(msgRead({userid, from, num: res.data.num}))
//           }
//         })
//   }
// }
// es7: 写异步
// async+await 配合使用，await要在async内部
export function readMsg(from) {
  return async(dispatch, getState) => {
    const res = await axios.post('/user/readmsg', { from })
    const userid = getState().user._id
    if (res.status === 200 && res.data.code === 0) {
      dispatch(msgRead({ userid, from, num: res.data.num }))
    }
  }
}

export function recvMsg() {
  return (dispatch, getState) => {
    socket.on('recvmsg', function(data) {
      console.log('recvmsg', data)
      const userid = getState().user._id
      dispatch(msgRecv(data, userid))
    })
  }
}

export function sendMsg({ from, to, msg }) {
  return dispatch => {
    socket.emit('sendmsg', { from, to, msg })
  }
}

export function getMsgList() {
  return (dispatch, getState) => {
    axios
      .get('/user/getmsglist')
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          const userid = getState().user._id
          dispatch(msgList(res.data.msgs, res.data.users, userid))
        }
      })
  }
}

