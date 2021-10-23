import React, { useMemo } from "react";
import { Provider } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { withRouter } from "react-router-dom";
import qs from "query-string";

const PolarisProvider = ({ location, children }) => {
  const { host } = useMemo(() => qs.parse(location.search), [location.search]);
  return (
    <Provider
      config={{
        apiKey: "70908b7a4acc791eb4905564e8bd965e",
        host,
        forceRedirect: true,
        Polaris: {
          Frame: {
            skipToContent: "Skip to content",
          },
          ContextualSaveBar: {
            save: "Save",
            discard: "Discard",
          },
        },
      }}
    >
      <AppProvider i18n={translations}>{children}</AppProvider>
    </Provider>
  );
};

export default withRouter(PolarisProvider);
