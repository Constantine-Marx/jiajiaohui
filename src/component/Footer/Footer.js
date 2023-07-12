import {AtTabBar} from "taro-ui";
import React, {Component} from "react";
import Taro from "@tarojs/taro";

class Footer extends Component {


  handleClick(value) {
    switch (value) {
      case 0:
        Taro.redirectTo({
          url: "/pages/index/index",
        }).then(r => console.log(r));
        break;
      case 1:
        Taro.redirectTo({
          url: "/pages/publish/publish"
        }).then(r => console.log(r));
        break;
      case 2:
        Taro.redirectTo({
          url: "/pages/user/user"
        }).then(r => console.log(r));
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <>
        <AtTabBar
          fixed
          tabList={[
            { title: "已发布", iconType: "list" },
            { title: "发布", iconType: "add" },
            { title: "我的", iconType: "user" },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.current}
        />
      </>
    );
  }
}
export default Footer;

