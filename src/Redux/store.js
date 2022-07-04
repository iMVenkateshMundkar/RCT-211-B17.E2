// NOTE: use this store variable to create a store.
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducers
import { reducer as appReducer } from "./AppReducer/reducer";

const middleware = [thunk];

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
