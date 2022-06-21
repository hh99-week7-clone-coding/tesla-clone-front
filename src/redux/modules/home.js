/* 액션 타입 */
const MENU_OPEN = 'home/MENU_OPEN';
const MENU_CLOSE = 'home/MENU_CLOSE'

/* 액션 생성 함수 */
export const menuOpen = () => ({
  type: MENU_OPEN
})
export const menuClose = () => ({
  type: MENU_CLOSE
})

/* 초기값 */
const initialState = {
  menuOpened : false
}

/* 리듀서 */
export default function home (state = initialState, action) {
  switch (action.type){
    case MENU_OPEN : {
      return {menuOpened : true}
    }
    case MENU_CLOSE : {
      return {menuOpened : false}
    }
    default: {
      return state;
    }
  }
}