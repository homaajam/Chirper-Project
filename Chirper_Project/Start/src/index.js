import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import middlewares from "./middlewares";
import { HashRouter as Router } from "react-router-dom";

const store=createStore(reducers, middlewares);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
