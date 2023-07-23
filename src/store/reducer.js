import { HOME,PUBLISH,USER } from "./constants";

const initialState = {
  //初始界面为home
  text: 'home',

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME:
      return { ...state, text: 'home' }
    case PUBLISH:
      return { ...state, text: 'publish' }
    case USER:
      return { ...state, text: 'user' }
    default:
      return state
  }
}

export default reducer
