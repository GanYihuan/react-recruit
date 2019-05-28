import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux' // connect react & redux
import { addGun, removeGun, addGunAsync } from './redux'

// adorn mode
// 1) state put into props
// const mapStatetoProps = state => {
// 	return { num: state }
// }
// 2) func put into props (addGun, removeGun, addGunAsync)
// const actionCreators = { addGun, removeGun, addGunAsync }
@connect(
  state => ({ num: state }),
  { addGun, removeGun, addGunAsync }
)
class App extends Component {
  render() {
    const { num, addGun, removeGun, addGunAsync } = this.props
    return (
      <div>
        <h2>现有机枪: {num}</h2>
        <Button onClick={addGun}>申请武器</Button>
        <Button onClick={removeGun}>上交武器</Button>
        <Button onClick={addGunAsync}>延迟给</Button>
      </div>
    )
  }
}

// export default connect(
// 	mapStatetoProps,
// 	actionCreators
// )(App)
export default App
