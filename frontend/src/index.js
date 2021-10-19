import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
//import { Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
//import history from "./utils/history";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
