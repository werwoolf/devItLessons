import React from 'react';
import {RoutePropagator as AppBridgeRoutePropagator} from '@shopify/app-bridge-react';
import {withRouter} from "react-router-dom";


function RoutePropagator({location}) {
  return <AppBridgeRoutePropagator
    location={location}
  />;
}

export default withRouter(RoutePropagator);
