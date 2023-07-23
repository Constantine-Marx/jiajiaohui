import React from 'react';
import {Picker, Text, View} from "@tarojs/components";
import {AtTextarea, AtButton, AtInput, AtListItem, AtList, AtCheckbox, AtFloatLayout} from "taro-ui";

import './publish.scss'

export default class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      contactInfo: '',
      checkedList: ['list1', 'list2'],
      selector: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
      subjectSelector: ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理', '其他'],
      frequencySelector: ['1次/周', '2次/周', '3次/周', '4次/周', '5次/周', '6次/周', '7次/周'],
      timeSel: '12:01',
      dateSel: new Date().toLocaleDateString(), // set initial value to current date
      isSubjectPickerOpen: false, // add state to control AtFloatLayout
      selectedSubjects: [] // add state to store selected subjects
    };
    this.checkboxOption = [{
      value: '语文',
      label: '语文'
    }, {
      value: '数学',
      label: '数学'
    }, {
      value: '英语',
      label: '英语'
    }, {
      value: '物理',
      label: '物理'
    }, {
      value: '化学',
      label: '化学'
    }, {
      value: '生物',
      label: '生物'
    }, {
      value: '政治',
      label: '政治'
    }, {
      value: '历史',
      label: '历史'
    }, {
      value: '地理',
      label: '地理'
    }, {
      value: '其他',
      label: '其他'
    }]
  }

  handleChange(value) {
    this.setState({value: value});
  }

  onContactInfoChange(value) {
    this.setState({contactInfo: value});

  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onCheckboxChange = e => {
    this.setState({
      checkedList: e
    })
  }

  onFrequencyChange = e => {
    this.setState({
      frequencySelectorChecked: this.state.frequencySelector[e.detail.value]
    })
  }

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  // add function to toggle AtFloatLayout
  toggleSubjectPicker = () => {
    this.setState({
      isSubjectPickerOpen: !this.state.isSubjectPickerOpen
    })
  }

  // add function to handle subject selection
  handleSubjectSelection = (selectedSubjects) => {
    this.setState({
      selectedSubjects: selectedSubjects
    })
  }

  render() {
    return (
      <View className='publish'>
        <View className='title' style={{margin: '20px 20px 1px 20px'}}>
          <View
            style={{borderRadius: '27px', background: '#FFF', boxShadow: '0px 4px 15px 0px rgba(167, 163, 163, 0.25)'}}>
            <AtTextarea
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              maxLength={200}
              placeholder='你的问题是...'
            />
          </View>
        </View>
        <View className={'link'} style={{margin: '0 20px 10px 20px'}}>
          <AtButton type='primary' circle='true'>邀请他人填写</AtButton>
          {/*TODO:点击生成链接*/}
        </View>
        <View className={'content'} style={{fontFamily: 'Times New Roman', fontSize: '19px', fontWeight: 'bold'}}>
          <View style={{height: '12px'}}></View>
          <Text>联系人信息</Text>
          <View
            style={{borderRadius: '27px', background: '#FFF', boxShadow: '0px 4px 15px 0px rgba(167, 163, 163, 0.25)'}}>
            <AtInput name='contactInfo'
                     title='联系人姓名'
                     type='text'
                     placeholder='请输入联系人姓名'
                     value={this.state.contactInfo}
                     onChange={this.onContactInfoChange.bind(this)}
            />
          </View>
          <View style={{height: '23px'}}></View>
          <Text>学生情况信息</Text>
          <View className='picker' style={{
            height: '80vh',
            borderRadius: '27px',
            background: '#FFF',
            boxShadow: '0px 4px 15px 0px rgba(167, 163, 163, 0.25)'
          }}>
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>
                <AtList>
                  <AtListItem
                    title='学生年级'
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
              </View>
            </Picker>
            {/* add AtFloatLayout */}
            <View className='picker'>
              <AtListItem
                title='选择科目'
                extraText={this.state.selectedSubjects.join(', ')}
                onClick={this.toggleSubjectPicker}
              />
              <AtFloatLayout isOpened={this.state.isSubjectPickerOpen} title='选择科目'>
                <AtCheckbox
                  options={this.checkboxOption}
                  selectedList={this.state.selectedSubjects}
                  onChange={this.handleSubjectSelection}
                />
              </AtFloatLayout>
            </View>
            <Picker onChange={this.onFrequencyChange} mode='selector' range={this.state.frequencySelector}>
              <View className='picker'>
                <AtList>
                  <AtListItem
                    title='辅导频率'
                    extraText={this.state.frequencySelectorChecked}
                  />
                </AtList>
              </View>
            </Picker>
            <Picker mode='date' onChange={this.onDateChange} value={this.state.dateSel}>
              <View className='picker'>
                <AtList>
                  <AtListItem
                    title='辅导时间'
                    extraText={this.state.dateSel}
                  />
                </AtList>
              </View>
            </Picker>
          </View>
        </View>
      </View>
    )
  }
}
