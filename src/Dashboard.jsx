import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import App from './App-3'

function Erying() {
	return <h2>二营</h2>
}

function Qibinglian() {
	return <h2>骑兵连</h2>
}

@connect(
	// auth: reducer.js/Auth.redux.jsx
	state => state.auth,
	{ logout }
)
class Dashboard extends Component {
	render() {
		const { logout, isAuth, match } = this.props
		// const match = this.props.match // route info
		// console.log(this.props.match)
		/*
    match: match route
		match.url: real route
    match.path: define route
    match.params.location: get route param
    */
		const redirectToLogin = <Redirect to="/login" />
		const app = (
			<div>
				<h1>独立团</h1>
				{isAuth ? <button onClick={logout}>注销</button> : null}
				<ul>
					<li>
						<Link to={`${match.url}/`}>一营</Link>
					</li>
					<li>
						<Link to={`${match.url}/erying`}>二营</Link>
					</li>
					<li>
						<Link to={`${match.url}/qibinglian`}>骑兵连</Link>
					</li>
				</ul>
				<Route path={`${match.url}/`} exact component={App} />
				<Route path={`${match.url}/erying`} component={Erying} />
				<Route path={`${match.url}/qibinglian`} component={Qibinglian} />
			</div>
		)
		return isAuth ? app : redirectToLogin
	}
}

export default Dashboard
