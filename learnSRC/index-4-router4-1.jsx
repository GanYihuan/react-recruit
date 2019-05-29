import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk' // redux handle async
import { createStore, applyMiddleware, compose } from 'redux' // applyMiddleware: open middle ware, compose: combine func
import { Provider } from 'react-redux' // connect react & redux
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom' // Router4
import reducers from './reducer' // merges reducer & returns
import App from './App-1'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
console.log(store.getState())

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

class Test extends React.Component {
  render() {
		/*
    history: route jump
		location: current page information
		url: address bihide domain name
		path: Locally defined address
		match: parameter use
    */
    console.log(this.props)
    /*
    history jump
		this.props.history.push('/')
		parameter /:location
    */
    // get router parameter
    return <h2>get Parameters: {this.props.match.params.location}</h2>
  }
}

ReactDom.render(
  /* pass store, connect react & redux */
  <Provider store={store}>
    {/* wrap route */}
    <BrowserRouter>
      <div>
        <ul>
          <li>
            {/* route jump */}
            <Link to="/">One</Link>
          </li>
          <li>
            <Link to="/erying">Two</Link>
          </li>
          <li>
            <Link to="/qibinglian">Three</Link>
          </li>
        </ul>
        {/* Switch: Render single Route. */}
        <Switch>
          {/* exact: Fully match routes to prevent inclusion relationships */}
          <Route path="/" exact component={App} />
          <Route path="/erying" component={Erying} />
          <Route path="/qibinglian" component={Qibinglian} />
          {/* pass parameter route jump */}
          <Route path="/:location" component={Test} />
          {/* default route jump */}
          <Redirect to="/:location" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
