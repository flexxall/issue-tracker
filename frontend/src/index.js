import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import history from "./utils/history";

import "./index.css";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
