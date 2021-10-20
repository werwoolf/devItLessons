import React from "react";
import reactDOM from "react-dom";
import App from "./app.js";
import { BrowserRouter } from "react-router-dom";
console.log(111);
reactDOM.render(
  /*#__PURE__*/ React.createElement(
    BrowserRouter,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(App, null)
    )
  ),
  document.getElementById("root")
);
