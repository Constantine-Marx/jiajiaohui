import Footer from "../../component/Footer/Footer";
import React from 'react';
import {Text, View} from "@tarojs/components";
import {AtTextarea,AtButton} from "taro-ui";

import './publish.scss'

export default class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(value) {
    this.setState({value: value});
  }

  render() {
    return (
      <View className='publish'>
        <View className='title'  style={{margin: '20px 20px 1px 20px'}}>
          <AtTextarea
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            maxLength={200}
            placeholder='你的问题是...'
          />
        </View>
        <View className={'link'} style={{margin:'0 20px 10px 20px'}}>
          <AtButton type='primary' circle={'true'}>邀请他人填写</AtButton>
          {/*TODO:点击生成链接*/}
        </View>
        <View className={'content'} style={ { fontFamily:'Times New Roman',fontSize:'19px',fontWeight:'bold' }}>
          <Text>链接：</Text>
        </View>
        <Footer class='footer'/>
      </View>
    )
  }
}
