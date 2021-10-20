import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppProvider } from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { Redirect } from "@shopify/app-bridge/actions";
import translations from "@shopify/polaris/locales/en.json";
import RoutePropagator from "./components/RoutePropagator.js";
import { BrowserRouter as Router } from "react-router-dom";
import ProductList from "./components/ProductList";
import "@shopify/polaris/dist/styles.css";

function userLoggedInFetch(app) {
  const fetchFunction = authenticatedFetch(app);

  return async (uri, options) => {
    const response = await fetchFunction(uri, options);

    if (
      response.headers.get("X-Shopify-API-Request-Failure-Reauthorize") === "1"
    ) {
      const authUrlHeader = response.headers.get(
        "X-Shopify-API-Request-Failure-Reauthorize-Url"
      );

      const redirect = Redirect.create(app);
      redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`);
      return null;
    }

    return response;
  };
}

const App = ({ ...rest }) => {
  const app = useAppBridge();
  const client = new ApolloClient({
    fetch: userLoggedInFetch(app),
    fetchOptions: {
      credentials: "include",
    },
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <AppProvider i18n={translations}>
          <RoutePropagator />
          ssssuka
          <ProductList />
        </AppProvider>
      </ApolloProvider>
    </Router>
  );
};

export default App;
