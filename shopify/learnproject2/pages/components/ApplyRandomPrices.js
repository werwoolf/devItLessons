import React, {useState} from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';
import {Layout, Button, Banner, Toast, Stack, Frame} from '@shopify/polaris';

const UPDATE_PRICE = gql`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;


const ApplyRandomPrices = (props) => {
    return (
      <Mutation mutation={UPDATE_PRICE}>
        {(handleSubmit, {error, data}) => {
          const [hasResults, setHasResults] = useState(false);

          const showError = error && (
            <Banner status="critical">{error.message}</Banner>
          );

          const showToast = hasResults && (
            <Toast
              content="Successfully updated"
              onDismiss={() => setHasResults(false)}
            />
          );

          return (
            <Frame>
              {showToast}
              <Layout.Section>
                {showError}
              </Layout.Section>

              <Layout.Section>
                <Stack distribution={"center"}>
                  <Button
                    primary
                    textAlign={"center"}
                    onClick={() => {
                      let promise = new Promise((resolve) => resolve());
                      for (const variantId in props.selectedItems) {
                        const price = Math.random().toPrecision(3) * 10;
                        const productVariableInput = {
                          id: props.selectedItems[variantId].variants.edges[0].node.id,
                          price: price,
                        };

                        promise = promise.then(() => handleSubmit({variables: {input: productVariableInput}}));
                      }

                      if (promise) {
                        promise.then(() => props.onUpdate().then(() => setHasResults(true)));
                      }
                    }
                    }
                  >
                    Randomize prices
                  </Button>
                </Stack>
              </Layout.Section>
            </Frame>
          );
        }}
      </Mutation>
    );
}

export default ApplyRandomPrices;
