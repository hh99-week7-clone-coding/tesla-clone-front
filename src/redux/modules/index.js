import { combineReducers } from "redux";
import categories from "./charging";
import modelslist from "./models";
import lifestylelist from "./lifestyle";
import shopdetail from "../modules/shopdetail";
import  home  from "./home";
import vehicleDetail from "./vehicleDetail";

const rootReducer = combineReducers({
  home,
  categories,
  modelslist,
  lifestylelist,
  vehicleDetail,
  shopdetail
  
});

export default rootReducer;