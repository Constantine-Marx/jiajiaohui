import React, {Component} from 'react'
import './app.scss'
import {Provider} from "react-redux";
import store from "./store";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
      console.log(store.getState())
    })
  }

  componentDidShow() {
  }
  componentDidHide() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return<Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
