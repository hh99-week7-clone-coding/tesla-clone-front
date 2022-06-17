import { combineReducers } from "redux";
import counter from './counter';
import todo from './todo';

// counter, todo reducer 들을 이렇게 합침
const rootReducer = combineReducers({
  counter,
  todo, // 이런식으로 reducer을 합침
});

export default rootReducer;