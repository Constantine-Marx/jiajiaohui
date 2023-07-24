import {ON_SELECT,OFF_SELECT} from "./constants";

export const createOnSelectAction = (id) => {
  return {
    type: ON_SELECT,
    data: {
      isSelect: true,
      id
    }
  }
}

export const createOffSelectAction = (id) => {
  return {
    type: OFF_SELECT,
    data: {
      isSelect: false,
      id
    }
  }
}


