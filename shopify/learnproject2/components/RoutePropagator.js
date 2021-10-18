import React from 'react';
import {RoutePropagator as AppBridgeRoutePropagator} from '@shopify/app-bridge-react';
import {withRouter} from "next/router.js";

function RoutePropagator({router}) {
  return <AppBridgeRoutePropagator
    location={router.asPath}
  />;
}

export default withRouter(RoutePropagator);
