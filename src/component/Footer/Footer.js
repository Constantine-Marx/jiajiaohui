import {AtTabBar} from "taro-ui";
import React from "react";
import Taro from "@tarojs/taro";
import store from "../../store";
import {toHome, toPublish, toUser} from "../../store/actions";

import homeIcon from "../../../assets/homepage/image/keyuan.png";
import homeIconSelected from "../../../assets/homepage/image/keyuanSelcd.png";
import messageIcon from "../../../assets/homepage/image/message.png";
import messageIconSelected from "../../../assets/homepage/image/messageSelcd.png";
import userIcon from "../../../assets/homepage/image/user.png";
import userIconSelected from "../../../assets/homepage/image/userSelcd.png";
import addIcon from "../../../assets/homepage/image/plus2.png";

class Footer extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: this.props.current
    }
  }

  handleClick(value) {
    switch (value) {
      case 0:
        store.dispatch(toHome());
        Taro.switchTab({
          url: "/pages/index/index"
        }).then(r => console.log(r))
        break;
      case 2:
        store.dispatch(toPublish());
        Taro.switchTab({
          url: "/pages/publish/publish"
        }).then(r => console.log(r))
        break;
      case 3:
        store.dispatch(toUser());
        Taro.switchTab({
          url: "/pages/user/user"
        }).then(r => console.log(r ))
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
            { title: "课源", image:homeIcon, selectedImage:homeIconSelected,},
            { title: "发布", image: addIcon, selectedImage: addIcon,  },
            { title: "消息", image: messageIcon, selectedImage: messageIconSelected ,},
            { title: "我的", image: userIcon, selectedImage: userIconSelected ,}
          ]}
          onClick={this.handleClick.bind(this)}
          current={store.getState()}
        />
      </>
    );
  }
}
export default Footer;

