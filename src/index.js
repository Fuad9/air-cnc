import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers/rootReducer";

let intialState = {};

try {
  intialState = sessionStorage.getItem("authUser")
    ? JSON.parse(sessionStorage.getItem("authUser"))
    : {};
} catch (error) {
  console.log("getError", error);
}

const saver = (store) => (next) => (action) => {
  let result = next(action);
  let stateToSave = store.getState();
  sessionStorage.setItem("authUser", JSON.stringify({ ...stateToSave }));
  return result;
};

const queryClient = new QueryClient();
const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk, saver))
);

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
