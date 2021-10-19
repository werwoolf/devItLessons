import React from 'react';
import {RoutePropagator as AppBridgeRoutePropagator} from '@shopify/app-bridge-react';
import {withRouter} from "react-router-dom";


function RoutePropagator({router}) {
  return <AppBridgeRoutePropagator
    location={router.asPath}
  />;
}

export default withRouter(RoutePropagator);
