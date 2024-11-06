import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import myReducer from "../reducers/myReducer";
import productsReducer from "../reducers/productsReducer";

let combinedAllReducers = combineReducers({
  myReducer,
  productsReducer,
});

let store = legacy_createStore(combinedAllReducers, applyMiddleware(logger)); //store is created

export default store;
