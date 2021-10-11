import React, {useState} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {  Card,  ResourceList,  Stack,  TextStyle,  Thumbnail,} from '@shopify/polaris';
import store from 'store-js';

import ApplyRandomPrices from './ApplyRandomPrices';

const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle

        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

const ResourceListWithProducts = (props)=> {
    const [state,setState] = useState({
      selectedItems: [],
      selectedNodes: {},
    })

    return (
      <Query query={GET_PRODUCTS_BY_ID} variables={{ ids: store.get('ids') }}>
        {({ data, loading, error, refetch }) => {
          console.log(data)
          if (loading) return <div>Loading…</div>;
          if (error) return <div>{error.message}</div>;
          const nodesById = {};
          data.nodes.forEach(node => nodesById[node.id] = node);

          return (
            <>
              <Card>
                <ResourceList
                  showHeader
                  resourceName={{ singular: 'Product', plural: 'Products' }}
                  items={data.nodes}
                  selectable
                  selectedItems={state.selectedItems}
                  onSelectionChange={selectedItems => {
                    const selectedNodes = {};
                    selectedItems.forEach(item => selectedNodes[item] = nodesById[item]);

                    return setState({
                      selectedItems: selectedItems,
                      selectedNodes: selectedNodes,
                    });
                  }}
                  renderItem={item => {
                    const media = (
                      <Thumbnail
                        source={
                          item.images.edges[0]
                            ? item.images.edges[0].node.originalSrc
                            : ''
                        }
                        alt={
                          item.images.edges[0]
                            ? item.images.edges[0].node.altText
                            : ''
                        }
                      />
                    );
                    const price = item.variants.edges[0].node.price;
                    return (
                      <ResourceList.Item
                        id={item.id}
                        media={media}
                        accessibilityLabel={`View details for ${item.title}`}
                        verticalAlignment="center"
                        onClick={() => {
                          let index = state.selectedItems.indexOf(item.id);
                          const node = nodesById[item.id];
                          if (index === -1) {
                            state.selectedItems.push(item.id);
                            state.selectedNodes[item.id] = node;
                          } else {
                            state.selectedItems.splice(index, 1);
                            delete state.selectedNodes[item.id];
                          }

                          setState({
                            selectedItems: state.selectedItems,
                            selectedNodes: state.selectedNodes,
                          });
                        }}
                      >
                        <Stack alignment="center">
                          <Stack.Item fill>
                            <h3>
                              <TextStyle variation="strong">
                                {item.title}
                              </TextStyle>
                            </h3>
                          </Stack.Item>
                          <Stack.Item>
                            <p>${price}</p>
                          </Stack.Item>
                        </Stack>
                      </ResourceList.Item>
                    );
                  }}
                />
              </Card>

              <ApplyRandomPrices selectedItems={state.selectedNodes} onUpdate={refetch} />
            </>
          );
        }}
      </Query>
    )
}

export default ResourceListWithProducts;
