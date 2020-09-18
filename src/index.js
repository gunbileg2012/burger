import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/index";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer/burgerReducer";
const loggerMiddlaWare = (store) => {
  return (next) => {
    return (action) => {
      console.log("My loggedMiddleware: Dispatching", action);
      console.log("My loggedMiddleware: State before", store.getState());
      const result = next(action);
      console.log("My loggedMiddleware: State after", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(loggerMiddlaWare))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
