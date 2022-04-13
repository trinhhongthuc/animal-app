import { combineReducers } from "redux";
import animalReducer from "./animalReducer";
import userReducer from "./userReducer";
const rootReducers = combineReducers({
  userReducer: userReducer,
  animalReducer: animalReducer,
});

export default rootReducers;
