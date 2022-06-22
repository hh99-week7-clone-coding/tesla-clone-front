import { combineReducers } from "redux";
import  home  from "./home";
import vehicleDetail from "./vehicleDetail";

const rootReducer = combineReducers({
  home,
  vehicleDetail
});

export default rootReducer;