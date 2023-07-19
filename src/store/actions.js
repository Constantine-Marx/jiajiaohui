//引入constants.js中定义的action常量名
import {HOME, PUBLISH, USER} from "./constants";

//定义action对象
export const toHome = () => {
  return {
    type: 'toPage',
    payload: {
      num:0
    }
  }
}

export const toPublish = () => {
  return {
    type: 'toPage',
    payload: {
      num:1
    }
  }
}

export const toUser = () => {
  return {
    type: 'toPage',
    payload: {
      num:2
    }
  }
}
