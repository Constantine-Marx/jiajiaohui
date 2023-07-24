import {Text, View,Form, Textarea, Button, Input, Picker} from "@tarojs/components";
import React, { useState, useEffect } from 'react';

import './contactors.scss'

export default function Contactors() {
    const data = {};
    return (
      <View className='contactor_publish'>
        <View>
          <Textarea autoHeight>
          你可以将已经编辑好的课源信息粘贴到此处，点击智能识别后自动填充相应信息。
            <Button >智能识别</Button>
          </Textarea>
        </View>
        <View>
          <Text>联系人名称</Text>
          <Input type='text'></Input>
        </View>
        <View>
          <Text>学生情况填写</Text>
          <Form>
            <View >
              <Text >年级</Text>
              <Picker>
                <View>选择学生年纪</View>
              </Picker>
            </View>
            <View >
              <Text >辅导科目</Text>
              <Picker>
                <View>选择需要辅导的科目</View>
              </Picker>
            </View>
            <View >
              <Text >课程频次</Text>
              <Picker>
                <View></View>
              </Picker>
            </View>
            <View >
              <Text >开课时间</Text>
              <Picker>
                <View></View>
              </Picker>
            </View>
            <View >
              <Text >课程薪酬</Text>
              <Input placeholder="100"></Input>
              <Text> 元/小时</Text>
            </View>
            <View >
              <Text >预计信息费</Text>
              <Input placeholder="100"></Input>
              <Button>规则设置</Button>
            </View>
            <View >
              <Text >课程形式</Text>
              <Picker>
                <View>选择课程展开的形式</View>
              </Picker>
            </View>
            <View >
              <Text >课程地址</Text>
              <Picker>
                <View></View>
              </Picker>
            </View>
          </Form>
        </View>
        <View>
          <Text>对家教的要求</Text>
          <Form>
            <View >
              <Text >学历</Text>
              <Picker>
                <View>无要求</View>
              </Picker>
            </View>
            <View >
              <Text >性别</Text>
              <Picker>
                <View>无要求</View>
              </Picker>
            </View>
            <View >
              <Text >经验</Text>
              <Picker>
                <View>无要求</View>
              </Picker>
            </View>
            <View >
              <Text >职业</Text>
              <Picker>
                <View>无要求</View>
              </Picker>
            </View>
            <View >
              <Text >其他要求</Text>
              <Textarea></Textarea>
            </View>
          </Form>
        </View>
      </View>
    )
}

