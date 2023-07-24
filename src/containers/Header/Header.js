import {Row, Col} from "@nutui/nutui-react-taro";
import React, {Component} from "react";

import {Picker,ConfigProvider} from "@nutui/nutui-react";
import {IconFont} from "@nutui/icons-react-taro";

import store from "../../store";
import {
  createOffSelectAction, createOnSelectAction,
} from "../../store/actions";
import {Text, View} from "@tarojs/components";

const timeList = [
  {
    text: "时间降序",
    value: "0",
  },
  {
    text: "时间升序",
    value: "1",
  }
]

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
      console.log(store.getState());
    });
  }

  onConfirm_0 = (value) => {
    this.setState({
      value: value.text,
    });
    store.dispatch(createOffSelectAction(0));
  }

  onChange_0 = (value) => {
    this.title = value.text;
  }

  render() {
    // 获取当前时间
    return (<ConfigProvider>
      <Row>
        <Col
          span={5}
          offset="22"
          style={{
            textAlign: "center", fontWeight: "bold", fontSize: "20px",
          }}
        >
          我发布的课源
        </Col>
        <Col span={1}>
          <IconFont
            name="notice"
            size="20"
            color="#000"
            onClick={() => {
              console.log("notice");
            }}
          />
        </Col>
      </Row>

      <View
        className="selector_4"
        style={{
          width: "95%", height: "40px", backgroundColor: "black", borderRadius: "10px", margin: "0 auto",
        }}
      >
        <Col span={6} style={{textAlign: "center"}}>
          <Row style={{height: 8}}></Row>
          <Text
            onClick={() => {
              store.dispatch(createOnSelectAction(0));
            }}
            style={{color: "white", fontSize: 14}}
          >
            时间降序▼
          </Text>
          <Picker
            options={timeList}
            visible={store.getState().isSelect_0}
            onClose={() => store.dispatch(createOffSelectAction(0))}
          />
          <Text
            onClick={() => {
              console.log("click");
            }}
            style={{color: "white"}}
          >
            {this.state.value}
          </Text>
        </Col>
        <Col span={6} style={{textAlign: "center"}}>
          <Row style={{height: 8}}></Row>
          <Text
            title=""
            onClick={() => {
              store.dispatch(createOnSelectAction(1));
            }}
            style={{color: "white", fontSize: 14}}
          >
            收入降序▼
          </Text>
          <Picker
            visible={store.getState().isSelect_1}
            onClose={() => store.dispatch(createOffSelectAction(1))}
          />
          <Text
            onClick={() => {
              console.log("click");
            }}
            style={{color: "white"}}
          >
            {this.state.value}
          </Text>
        </Col>
        <Col span={6} style={{textAlign: "center"}}>
          <Row style={{height: 8}}></Row>
          <Text
            title=""
            onClick={() => {
              store.dispatch(createOnSelectAction(2));
            }}
            style={{color: "white", fontSize: 14}}
          >
            申请状态▼
          </Text>
          <Picker
            visible={store.getState().isSelect_2}
            onClose={() => store.dispatch(createOffSelectAction(2))}
          />
          <Text
            onClick={() => {
              console.log("click");
            }}
            style={{color: "white"}}
          >
            {this.state.value}
          </Text>
        </Col>
        <Col span={6} style={{textAlign: "center"}}>
          <Row style={{height: 8}}></Row>
          <Text
            title=""
            onClick={() => {
              store.dispatch(createOnSelectAction(3));
            }}
            style={{color: "white", fontSize: 14}}
          >
            所有地区▼
          </Text>
          <Picker
            visible={store.getState().isSelect_3}
            onClose={() => store.dispatch(createOffSelectAction(3))}
          />
          <Text
            onClick={() => {
              console.log("click");
            }}
            style={{color: "white"}}
          >
            {this.state.value}
          </Text>
        </Col>
      </View>
    </ConfigProvider>);
  }
}
