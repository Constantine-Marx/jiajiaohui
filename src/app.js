import React, { Component } from 'react'
import './app.scss'
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}
  // this.props.children 是将要会渲染的页面
  render () {
    <Provider store={store}>
      <App />
    </Provider>
    return this.props.children
  }
}

export default App
