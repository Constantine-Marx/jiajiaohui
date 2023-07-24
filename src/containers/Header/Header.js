import {Row, Col} from "@nutui/nutui-react-taro";
import React, {Component} from "react";

import {Picker, ConfigProvider} from "@nutui/nutui-react";
import {IconFont} from "@nutui/icons-react-taro";

import store from "../../store";
import {
  createOffSelectAction, createOnSelectAction,
} from "../../store/actions";
import {Text, View} from "@tarojs/components";
import './Header.scss'

const timeList = [
  {
    text: "时间降序",
    value: "时间降序▼",
  },
  {
    text: "时间升序",
    value: "时间升序▼",
  }
]

const incomeList = [
  {
    text: "收入降序",
    value: "收入降序▼",
  },
  {
    text: "收入升序",
    value: "收入升序▼",
  }
]

const stateList = [
  {
    text: "待投递",
    value: "待投递▼",
  },
  {
    text: "进行中",
    value: "进行中▼",
  },
  {
    text: "已完成",
    value: "已完成▼",
  },
  {
    text: "已取消",
    value: "已取消▼",
  }
]

const regionList = [
  {
    text: "北京市",
    value: "北京",
    children: [
      {
        text: "海淀区",
        value: "海淀",
      },
      {
        text: "朝阳区",
        value: "朝阳",
      },
      {
        text: "东城区",
        value: "东城",
      },
      {
        text: "西城区",
        value: "西城",
      },
      {
        text: "丰台区",
        value: "丰台",
      },
      {
        text: "石景山区",
        value: "石景山",
      },
      {
        text: "通州区",
        value: "通州",
      },
      {
        text: "昌平区",
        value: "昌平",
      },
      {
        text: "大兴区",
        value: "大兴",
      },
      {
        text: "顺义区",
        value: "顺义",
      },
      {
        text: "房山区",
        value: "房山",
      },
      {
        text: "门头沟区",
        value: "门头沟",
      },
      {
        text: "平谷区",
        value: "平谷",
      },
      {
        text: "怀柔区",
        value: "怀柔",
      },
      {
        text: "密云区",
        value: "密云",
      },
      {
        text: "延庆区",
        value: "延庆",
      },
    ]
  },
  {
    text: "天津市",
    value: "天津",
    children: [
      {
        text: "和平区",
        value: "和平",
      },
      {
        text: "河东区",
        value: "河东",
      },
      {
        text: "河西区",
        value: "河西",
      },
      {
        text: "南开区",
        value: "南开",
      },
      {
        text: "河北区",
        value: "河北",
      },
      {
        text: "红桥区",
        value: "红桥",
      },
      {
        text: "东丽区",
        value: "东丽",
      },
      {
        text: "西青区",
        value: "西青",
      },
      {
        text: "津南区",
        value: "津南",
      },
      {
        text: "北辰区",
        value: "北辰",
      },
      {
        text: "武清区",
        value: "武清",
      },
      {
        text: "宝坻区",
        value: "宝坻",
      },
      {
        text: "滨海新区",
        value: "滨海新",
      },
      {
        text: "宁河区",
        value: "宁河",
      },
      {
        text: "静海区",
        value: "静海",
      },
      {
        text: "蓟州区",
        value: "蓟州",
      },
    ]
  },
  {
    text: "广州市",
    value: "广州",
    children: [
      {
        text: "越秀区",
        value: "越秀",
      },
      {
        text: "荔湾区",
        value: "荔湾",
      },
      {
        text: "海珠区",
        value: "海珠",
      },
      {
        text: "天河区",
        value: "天河",
      },
      {
        text: "白云区",
        value: "白云",
      },
      {
        text: "黄埔区",
        value: "黄埔",
      },
      {
        text: "番禺区",
        value: "番禺",
      },
      {
        text: "花都区",
        value: "花都",
      },
      {
        text: "南沙区",
        value: "南沙",
      },
      {
        text: "增城区",
        value: "增城",
      },
      {
        text: "从化区",
        value: "从化",
      }
    ]
  },
  {
    text: "上海市",
    value: "上海",
    children: [
      {
        text: "黄浦区",
        value: "黄浦",
      },
      {
        text: "徐汇区",
        value: "徐汇",
      },
      {
        text: "长宁区",
        value: "长宁",
      },
      {
        text: "静安区",
        value: "静安",
      },
      {
        text: "普陀区",
        value: "普陀",
      },
      {
        text: "虹口区",
        value: "虹口",
      },
      {
        text: "杨浦区",
        value: "杨浦",
      },
      {
        text: "闵行区",
        value: "闵行",
      },
      {
        text: "宝山区",
        value: "宝山",
      },
      {
        text: "嘉定区",
        value: "嘉定",
      },
      {
        text: "浦东新区",
        value: "浦东新",
      },
      {
        text: "金山区",
        value: "金山",
      },
      {
        text: "松江区",
        value: "松江",
      },
      {
        text: "青浦区",
        value: "青浦",
      },
      {
        text: "奉贤区",
        value: "奉贤",
      },
      {
        text: "崇明区",
        value: "崇明",
      },
    ]
  }
]

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      title_0: "时间降序▼",
      title_1: "收入降序▼",
      title_2: "申请状态▼",
      title_3: "所有地区▼",
      desc_3: "所有地区",
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
      console.log(store.getState());
    });
  }

  onConfirm_0 = (List, value) => {
    console.log(value);
    this.setState({
      title_0: value,
    });
    store.dispatch(createOffSelectAction(0));
  }

  onConfirm_1 = (List, value) => {
    console.log(value);
    this.setState({
      title_1: value,
    });
    store.dispatch(createOffSelectAction(1));
  }

  onConfirm_2 = (List, value) => {
    console.log(value);
    this.setState({
      title_2: value,
    });
    store.dispatch(createOffSelectAction(2));
  }

  onConfirm_3 = (List, value) => {
    console.log(value);
    this.setState({
      title_3: value,
    });
    store.dispatch(createOffSelectAction(3));
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
            {this.state.title_0}
          </Text>
          <Picker
            onConfirm={(timeList, value) => this.onConfirm_0(timeList, value)}
            options={timeList}
            visible={store.getState().isSelect_0}
            onClose={() => store.dispatch(createOffSelectAction(0))}
          />
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
            {this.state.title_1}
          </Text>
          <Picker
            onConfirm={(incomeList, value) => this.onConfirm_1(incomeList, value)}
            options={incomeList}
            visible={store.getState().isSelect_1}
            onClose={() => store.dispatch(createOffSelectAction(1))}
          />
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
            {this.state.title_2}
          </Text>
          <Picker
            onConfirm={(stateList, value) => this.onConfirm_2(stateList, value)}
            options={stateList}
            visible={store.getState().isSelect_2}
            onClose={() => store.dispatch(createOffSelectAction(2))}
          />
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
            {this.state.title_3}
          </Text>
          <Picker
            onConfirm={(regionList, value) => this.onConfirm_3(regionList, value)}
            options={regionList}
            visible={store.getState().isSelect_3}
            onClose={() => store.dispatch(createOffSelectAction(3))}
          />
        </Col>
      </View>
    </ConfigProvider>);
  }
}
