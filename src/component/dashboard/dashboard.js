import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
// import QueueAnim from 'rc-queue-anim'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
// import User from '../../component/user/user'
// import Msg from '../msg/msg'
import { getMsgList, recvMsg } from '../../redux/chat.redux'

// function Boss() {
//   return <h2>Boos</h2>
// }

function Msg() {
  return <h2>Msg</h2>
}

function User() {
  return <h2>User</h2>
}

@connect(
  state => state,
  { getMsgList, recvMsg }
)
class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
  }
  render() {
    const { pathname } = this.props.location
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]
    let title
    navList.forEach((item, index) => {
      if(item.path === pathname) {
        title = item.title
      }
    })
    // const page = navList.find(v => v.path === pathname)
    // const title = page.title
    // The animation takes effect, rendering only a route, which determines the component based on the current path
    return (
      <div>
        <NavBar
          className='fixd-header'
          mode='dard'
        >
          {title}
        </NavBar>
        <div style={{ marginTop: 45 }}>
          {/* <QueueAnim
            type={'scaleX'}
            duration={'800'}
          >
            <Route
              key={path}
              path={path}
              component={component}
            />
          </QueueAnim> */}
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}/>
      </div>
    )
  }
}

export default Dashboard
