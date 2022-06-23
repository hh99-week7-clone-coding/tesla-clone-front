import { combineReducers } from "redux";
import categories from "./charging";
import modelslist from "./models";
import lifestylelist from "./lifestyle";
import  home  from "./home";

const rootReducer = combineReducers({
  home,
  categories,
  modelslist,
  lifestylelist
  
});

export default rootReducer;