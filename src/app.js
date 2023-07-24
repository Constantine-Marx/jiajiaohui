import React, {Component} from 'react'
import './app.scss'
import {Provider} from "react-redux";
import store from "./store";
import {ConfigProvider} from "@nutui/nutui-react";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <ConfigProvider>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </ConfigProvider>
    )
  }

}

export default App
