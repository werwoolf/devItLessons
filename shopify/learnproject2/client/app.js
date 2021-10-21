import React from "react";
import RoutePropagator from "./components/RoutePropagator.js";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ProductList from "./components/ProductList";
import PolarisProvider from "./providers/PolarisProvider.js";
import ApolloProvider from "./providers/ApolloProvider.js";

import "@shopify/polaris/dist/styles.css";
import CreateProduct from "./components/CreateProduct.js";

const App = () => (
  <Router basename={"/"}>
    <PolarisProvider>
      <ApolloProvider>
        <RoutePropagator/>
        <Switch>

          <Route exact={true} path="/products"> <ProductList/> </Route>
          <Route  path="/products/create"> <CreateProduct/> </Route>

        </Switch>

        <Link to="/products">My products</Link>
      </ApolloProvider>
    </PolarisProvider>
  </Router>
);

export default App;
