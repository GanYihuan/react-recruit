import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { connect } from 'react-redux'

@withRouter
@connect(
  state => state.chat
)
class NavLinkBar extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  render() {
    const navList = this.props.data.filter(v => !v.hide)
    const { pathname } = this.props.location
    return (
      <TabBar>
        {navList.map(v => (
          <TabBar.Item
            key={v.path}
            badge={v.path === '/msg' ? this.props.unread : 0}
            title={v.text}
            icon={{ uri: require(`./img/${v.icon}.png`) }}
            selectedIcon={{ uri: require(`./img/${v.icon}-active.png`) }}
            selected={pathname === v.path}
            onPress={() => {
              this.props.history.push(v.path)
            }}
          />
        ))}
      </TabBar>
    )
  }
}

export default NavLinkBar
