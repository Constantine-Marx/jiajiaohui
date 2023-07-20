import {HOME} from "./constants";

function reducers(state = HOME, action) {
  switch (action.type) {
    case 'toPage':
      return action.payload.num;
    default:
      return state;
  }
}

export default reducers;
