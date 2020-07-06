/* global module */
import React from "react";
import { render } from "react-dom";
import HomePage from './pages/home/HomePage';

const root = document.getElementById("root");

function renderApp() {
//   const App = require("./pages/home/HomePage").default;
  render(<HomePage />, root);
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}