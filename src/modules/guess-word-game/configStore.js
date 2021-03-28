import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const configureStore = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
);

export default configureStore;
