import { createStore, applyMiddleware, compose  } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers";

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: (action) => { return },
        traceLimit: 10,
      });
    }
  }
}

const middleware = [thunk]

const store = createStore(reducers,{},composeEnhancers(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
export default store;