import React, {Component} from 'react';
import {Text, View} from "@tarojs/components";
import {Row} from "@nutui/nutui-react-taro";
import Card from "../../component/card/card";

export default class Body extends Component {

  render() {
    return (
      <>
        <View>
          <Row style={{height: "10px"}}>
          </Row>
          <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: "10px"}}>
            批量管理
          </Text>
        </View>
        <View>
          <Card></Card>
        </View>
      </>
    )
  }
}
