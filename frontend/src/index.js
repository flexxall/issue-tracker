import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Router } from "react-router-dom";
import history from "./utils/history";

import "./index.css";

ReactDOM.render(
  <Router history={history}>
    <App />,
  </Router>,
  document.getElementById("root")
);
