import { combineReducers } from "redux";

import personReducer from "./person/reducer";

const rootReducer = combineReducers({
  personReducer
});

export default rootReducer;