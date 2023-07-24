import {ON_SELECT, OFF_SELECT} from "./constants";

function reducers(state = OFF_SELECT, action) {
  const {type, data} = action;
  switch (type) {
    case ON_SELECT:
      switch (data.id) {
        case 0:
          return {
            isSelect_0: true,
          }
        case 1:
          return {
            isSelect_1: true,
          }
        case 2:
          return {
            isSelect_2: true,
          }
        case 3:
          return {
            isSelect_3: true,
          }
        default:
          return state;
      }
    case OFF_SELECT:
      switch (data.id) {
        case 0:
          return {
            isSelect_0: false,
          }
        case 1:
          return {
            isSelect_1: false,
          }
        case 2:
          return {
            isSelect_2: false,
          }
        case 3:
          return {
            isSelect_3: false,
          }
        default:
          return state;
      }
    default:
      return state;
  }
}

export default reducers;
