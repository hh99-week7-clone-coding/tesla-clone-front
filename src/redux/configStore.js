import { createStore } from "redux";
import rootReducer from './modules';

// 생성
const store = createStore(rootReducer);
export default store;