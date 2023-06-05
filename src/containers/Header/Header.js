import {AtButton, AtSearchBar,} from "taro-ui";
import {View} from "@tarojs/components";
import {Component} from "react";

import './Header.scss'

export default class Header extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
    }
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  onActionClick() {
    console.log('开始搜索')
  }

  handleClick1() {
    console.log('YES');
  }

  render() {
    return (
      <View className='head'>
        <View className='Header' style={{display: 'flex', justifyContent: "flex-end",}}>
          <View className='regionButton'>
            <AtButton type='secondary' size='small' onClick={this.onActionClick.bind(this)}>地区</AtButton>
          </View>
          <View className='searchbar'>
            <AtSearchBar
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
          </View>
        </View>
        <View className='at-row'>
          <AtButton type='primary' size='small' className='at-col at-col-2' circle='true'>薪酬↓</AtButton>
          <AtButton type='primary' size='small' className='at-col at-col-2' circle='true'>年级↓</AtButton>
          <AtButton type='primary' size='small' className='at-col at-col-2' circle='true'>学科↓</AtButton>
          <AtButton type='primary' size='small' className='at-col at-col-2' circle='true'>时段↓</AtButton>
        </View>
      </View>
    )
  }
}
