/*
 * @Description: nodemon server.js, package.json -> "proxy": "http://localhost:9093"
 * @version: 1.0
 * @Author: GanEhank
 * @LastEditors: GanEhank
 * @Date: 2019-04-13 18:16:01
 * @LastEditTime: 2019-05-29 12:33:51
 */

import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import reducers from './reducer' // Merges all reducer and returns
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Auth} />
				<Route path="/dashboard" component={Dashboard} />
				<Redirect to="/dashboard" />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
