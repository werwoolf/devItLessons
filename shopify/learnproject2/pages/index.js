import React, {useState} from 'react';
import {Page, Layout, EmptyState} from "@shopify/polaris";
import {ResourcePicker, TitleBar} from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from './components/ResourceList.js';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
// store.clearAll()

const Index = () => {
  const [state, setState] = useState({open: false});
  const emptyState = !store.get('ids');

  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    setState({open: false});
    store.set('ids', idsFromResources);
  }
  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select products',
          onAction: () => setState({open: true}),
        }}
      />

      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={state.open}
        onSelection={(resources) =>
          handleSelection(resources)}
        onCancel={() => setState({open: false})}
      />

      {emptyState ? (
        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => setState({open: true}),
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      ) : (
        <ResourceListWithProducts/>
      )}
    </Page>
  );
}

export default Index;
