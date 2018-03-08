import React, {Component} from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import results from "./results";
import registration from "./registration";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Field-Level Validation</h2>
      <registration onSubmit={showResults} />
      <Values form="registration" />
    </div>
  </Provider>,
  rootEl
);
