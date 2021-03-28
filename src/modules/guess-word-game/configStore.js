import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const configureStore = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunkMiddleware))
);

export default configureStore;
