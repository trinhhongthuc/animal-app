import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

const middleware = [thunk];

export const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
