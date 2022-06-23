/* 액션 타입 */
const MENU_OPEN = 'home/MENU_OPEN';
const MENU_CLOSE = 'home/MENU_CLOSE'
const IS_LOGIN = 'home/IS_LOGIN'

/* 액션 생성 함수 */
export const menuOpen = () => ({
  type: MENU_OPEN
})
export const menuClose = () => ({
  type: MENU_CLOSE
})
export const isLoginUser = (payload) => ({
  type: IS_LOGIN, payload
})

/* 초기값 */
const initialState = {
  menuOpened : false,
  isLogin : false
}

/* 리듀서 */
export default function home (state = initialState, action) {
  switch (action.type){
    case MENU_OPEN : {
      return {...state, menuOpened : true}
    }
    case MENU_CLOSE : {
      return {...state, menuOpened : false}
    }
    case IS_LOGIN : {
      return {...state, isLogin : action.payload}
    }
    default: {
      return state;
    }
  }
}