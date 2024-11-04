import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import myReducer from "../reducers/myReducer";

let store = legacy_createStore(myReducer, applyMiddleware(logger)); //store is created

// store.subscribe(() => {
//   console.log(store.getState());
// });

//getState() is pre-defined function which returns store data

export default store;
