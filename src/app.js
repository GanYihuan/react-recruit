import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Login from './container/login/login'
import Dashboard from './component/dashboard/dashboard'
import BossInfo from './container/bossinfo/bossinfo'
import Chat from './component/chat/chat'

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthRoute/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/bossinfo' component={BossInfo}/>
          <Route path='/geniusinfo' component={GeniusInfo}/>
          <Route path='/chat/:user' component={Chat}/>
          {/* similar 404 page */}
          <Route component={Dashboard}/>
        </Switch>
      </div>
    )
  }
}

export default App
