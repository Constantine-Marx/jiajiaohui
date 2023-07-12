import Footer from "../../component/Footer/Footer";
import {View, Button, Text} from "@tarojs/components";
import Taro from '@tarojs/taro';

import './user.scss'

import { useState, useEffect } from 'react';

export default function User() {
  const [sucData, setSucData] = useState({});
  const handleLogin = () => {
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          Taro.request({
            method: 'POST',
            url: 'http://47.115.228.112/sessions',
            data: {
              auth_code: res.code
            },
            success: function (res) {
              setSucData(res);
              console.log(res);
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    }).then(r => {
      console.log(r)
    })
  }
  
  useEffect(() => {
    console.log(sucData);
  }, [sucData]);

  return (
    <View className='user'>
      <Button onClick={handleLogin}>Login</Button>
      {sucData.data && <Text>{sucData.data}</Text>}
      <Footer class='footer'/>
    </View>
  )
}


// This code block is a commented out version of the Taro.login() function.
// It is used to log in the user and obtain their login code.
// If the login is successful, a network request is made to the specified URL with the login code as data.
// If the login is unsuccessful, an error message is logged to the console.

// Taro.login({
//   success: function (res) {
//     if (res.code) {
//       //发起网络请求
//       Taro.request({
//         url: 'https://test.com/onLogin',
//         data: {
//           code: res.code
//         }
//       })
//     } else {
//       console.log('登录失败！' + res.errMsg)
//     }
//   }
// })

