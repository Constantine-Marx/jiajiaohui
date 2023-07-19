import Footer from "../../component/Footer/Footer";
import React from 'react';
import {Picker, Text, View} from "@tarojs/components";
import {AtTextarea, AtButton, AtInput, AtListItem, AtList} from "taro-ui";

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

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  render() {
    return (
      <View className='publish'>
        <View className='title' style={{margin: '20px 20px 1px 20px'}}>
          <View style={{borderRadius: '27px', background: '#FFF', boxShadow: '0px 4px 15px 0px rgba(167, 163, 163, 0.25)'}}>
            <AtTextarea
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              maxLength={200}
              placeholder='你的问题是...'
            />
          </View>
        </View>
        <View className={'link'} style={{margin: '0 20px 10px 20px'}}>
          <AtButton type='primary' circle={'true'}>邀请他人填写</AtButton>
          {/*TODO:点击生成链接*/}
        </View>
        <View className={'content'} style={{fontFamily: 'Times New Roman', fontSize: '19px', fontWeight: 'bold'}}>
          <View style={{height: '12px'}}></View>
          <Text>联系人信息</Text>
          <View style={{borderRadius: '27px', background: '#FFF', boxShadow: '0px 4px 15px 0px rgba(167, 163, 163, 0.25)'}}>
            <AtInput name='contactInfo'
                     title='联系人姓名'
                     type='text'
                     placeholder='请输入联系人姓名'
                     value={this.state.contactInfo}
                     onChange={this.handleChange.bind(this)}
            />
          </View>
          <View style={{height: '23px'}}></View>
          <Text>学生情况信息</Text>
          <View style={{borderRadius: '27px', background: '#FFF', boxShadow: '0px 4px 15px 0px rgba(167, 163, 163, 0.25)'}}>
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>
                <AtList>
                  <AtListItem
                    title='学生年级'
                    extraText={this.state.selectorChecked}
                  />
                  <AtListItem
                    title='辅导科目'
                    extraText={this.state.selectorChecked}
                  />
                  <AtListItem
                    title='课程频次'
                    extraText={this.state.selectorChecked}
                  />
                  <AtListItem
                    title='开课时间'
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
              </View>

            </Picker>
          </View>
        </View>
        <Footer class='footer'/>
      </View>
    )
  }
}
