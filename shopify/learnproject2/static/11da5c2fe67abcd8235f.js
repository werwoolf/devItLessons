import React from "react";
import reactDOM from "react-dom";
import App from "./app.js";
import { Provider } from "@shopify/app-bridge-react";
reactDOM.render(
  /*#__PURE__*/ React.createElement(
    Provider,
    {
      config: {
        apiKey: "b8b45cf29f48ed14675b63f56cc2f8ee",
        host: "https://b27f-31-170-156-175.ngrok.io/",
        // TODO: host from query params
        forceRedirect: true,
      },
    },
    /*#__PURE__*/ React.createElement(App, null)
  ),
  document.getElementById("root")
);
