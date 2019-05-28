import React, { Component } from 'react'
import { Button, List } from 'antd-mobile'

class App extends Component {
  render() {
    let boss = '李云龙boss'
    return (
      <div>
        <h2>独立团，团长 {boss}</h2>
        <Yiying boss="张大喵boss" />
        <Qibinglian boss="孙德胜boss" />
      </div>
    )
  }
}

class Yiying extends Component {
  constructor(props) {
    super(props) // pass data between components
    this.state = { // manage status
      soldiers: [
        'A soldier',
        'B soldier',
        'C soldier'
      ]
    }
    this.addSoldier = this.addSoldier.bind(this) // 1: this Scope
    console.log('constructor 组件初始化')
  }
  render() {
    const { boss } = this.props
    return (
      <div>
        <h2>Yiying营长, {boss}</h2>
        {/* 2: this scope */}
        {/* <button onClick={() => this.addSoldier()}>新兵入伍</button> */}
        <Button type={'primary'} onClick={this.addSoldier}>新兵入伍</Button>
        <List renderHeader={() => '士兵列表'}>
          {
            this.state.soldiers.map(v => {
              return <List.Item key={v}>{v}</List.Item>
            })
          }
        </List>
      </div>
    )
  }

  // Mount (life circle)
  componentWillMount() {
    console.log('componentWillMount 组件马上就要挂载了')
  }
  // render()
  componentDidMount() { // async request
    console.log('componentDidMount 组件已经挂载')
  }

  // Update (life circle)
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps 组件要接收福组件的值了')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 判断是不是要更新组件')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate 马上就要更新组件了')
  }
  // render()
  componentDidUpdate() {
    console.log('componentDidUpdate 件更新完毕')
  }

  // Unmount (life circle)
  componentWillUnmount() {
    console.log('componentWillUnmount 组件卸载了')
  }

  addSoldier() { // 3: this scope: addSoldier = () => {
    this.setState(() => {
      return {
        soldiers: [...this.state.soldiers, '新兵蛋子' + Math.random()]
      }
    })
  }
}

function Qibinglian(props) {
  return (
    <h2>Qibinglian连长 {props.boss},冲啊！</h2>
  )
}

export default App
