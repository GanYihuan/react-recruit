import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'

/*
Auth.redux.jsx reducer & redux.jsx reducer
both reducer have state, reducer.js combine reducer
*/
@connect(
	state => state.auth, // reducer.js: auth -> Auth.redux.jsx
	{ login, getUserData }
)
class Auth extends React.Component {
	render() {
		const { user, age, isAuth, login } = this.props
		return (
			<div>
        {isAuth ? <Redirect to="/dashboard" /> : null}
        <h2>我的名字是 {user},年龄{age}</h2>
				<h2>你没有权限，需要登录才能看</h2>
				<button onClick={login}>登录</button>
			</div>
		)
  }
  componentDidMount() {
		this.props.getUserData()
	}
}

export default Auth
