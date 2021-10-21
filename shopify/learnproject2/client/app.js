import React from "react";
import RoutePropagator from "./components/RoutePropagator.js";
import {BrowserRouter as Router} from "react-router-dom";
import ProductList from "./components/ProductList";
import PolarisProvider from "./providers/PolarisProvider.js";
import ApolloProvider from "./providers/ApolloProvider.js";

import "@shopify/polaris/dist/styles.css";

const App = () => (
  <Router>
    <PolarisProvider>
      <ApolloProvider>
        <RoutePropagator/>
        ssssuka
        <ProductList/>
      </ApolloProvider>
    </PolarisProvider>
  </Router>
);

export default App;
