import {View, Image} from '@tarojs/components'
import './index.scss'
import React from "react";
import Header from "../../containers/Header/Header";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    return (
    <Header />
    )
  }
}

