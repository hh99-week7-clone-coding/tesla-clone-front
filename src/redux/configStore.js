import { createStore } from "redux";
// 모듈 안에서 rootReducer 가져와서 Store 생성 예정
import rootReducer from './modules';

// 생성
const store = createStore(rootReducer);
export default store;