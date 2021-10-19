import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {AppProvider} from "@shopify/polaris";
import {Provider as AppBridgeProvider, useAppBridge} from "@shopify/app-bridge-react";
import {authenticatedFetch} from "@shopify/app-bridge-utils";
import {Redirect} from "@shopify/app-bridge/actions";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import RoutePropagator from "./components/RoutePropagator.js";
import {withRouter} from "react-router-dom";

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

const App = ({...rest}) => {
  console.log(rest);
  const app = useAppBridge();

  const client = new ApolloClient({
    fetch: userLoggedInFetch(app),
    fetchOptions: {
      credentials: "include",
    },
  });

  return (
    <ApolloProvider client={client}>
      <AppProvider i18n={translations}>
        <AppBridgeProvider
          config={{
            apiKey: "b8b45cf29f48ed14675b63f56cc2f8ee",
            host: host, // TODO: host from query params
            forceRedirect: true,
          }}
        >
          <RoutePropagator/>

          REACT ROUTER SHOULD BE HERE
        </AppBridgeProvider>
      </AppProvider>
    </ApolloProvider>
  );
}

export default withRouter(App);
