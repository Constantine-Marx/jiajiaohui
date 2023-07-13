//引入constants.js中定义的action常量名
import {HOME, PUBLISH, USER} from "./constants";

//定义action对象
export const toHome = () => {
  return {
    type: HOME,
    payload: {
      text: 'Use Redux'
    }
  }
}

export const toPublish = () => {
  return {
    type: PUBLISH,
    payload: {
      text: 'Use Redux'
    }
  }
}

export const toUser = () => {
  return {
    type: USER,
    payload: {
      text: 'Use Redux'
    }
  }
}
