import { combineReducers } from "redux";
import categories from "./charging";
import modelslist from "./models";
import lifestylelist from "./lifestyle";
import  home  from "./home";
import vehicleDetail from "./vehicleDetail";

const rootReducer = combineReducers({
  home,
  categories,
  modelslist,
  lifestylelist,
  vehicleDetail
  
});

export default rootReducer;