import {AtTabBar} from 'taro-ui'
import {Component} from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <AtTabBar
        fixed
        tabList={[
          {title: '已发布', iconType: 'list'},
          {title: '发布', iconType: 'add'},
          {title: '我的', iconType: 'user'}
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
