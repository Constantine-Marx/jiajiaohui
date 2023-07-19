import {PUBLISH, USER} from "./constants";

function reducers(state = PUBLISH, action) {
  switch (action.type) {
    case 'toPage':
      return action.payload.num;

    default:
      return state;
  }
}

export default reducers;
