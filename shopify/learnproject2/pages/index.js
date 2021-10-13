import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {useLazyQuery} from 'react-apollo';
import {Card, ResourceList, TextStyle, Page, ResourceItem, Pagination, Thumbnail, Avatar} from '@shopify/polaris';

const GET_PRODUCT_LIST = gql`
  query getProducts($first: Int, $last: Int, $after: String, $before: String){
  products(first: $first, last: $last, after: $after, before: $before) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
      }
    }
  }
}
`

const Index = () => {
  const [loadProducts, {loading, error, data}] = useLazyQuery(GET_PRODUCT_LIST);
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    loadProducts({
      variables: {
        first: 5
      }
    });
  }, [loadProducts])

  console.log(data)
  return (
    <Page>
      {loading && <div>loading</div>}
      {data && (
        <div>
          <ResourceList
            resourceName={{singular: 'product', plural: 'products'}}
            items={data.products.edges}

            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            selectable

            renderItem={(item) => {

              const {id, title} = item.node;
              const price = item.node.priceRangeV2.maxVariantPrice.amount;
              const media = <Thumbnail source="" size="medium"/>

              return (
                <ResourceItem
                  id={id}
                  title={title}
                  price={price}
                  media={media}
                  accessibilityLabel={`View details for ${title}`}
                  name={title}
                >

                  <div>
                    <TextStyle variation="strong">{title}</TextStyle>
                    <div>price: {price}</div>
                  </div>
                </ResourceItem>
              );

            }}
          />
          <Pagination
            hasPrevious={data.products.pageInfo.hasPreviousPage}
            onPrevious={() => {
              loadProducts({
                variables: {
                  last: 5,
                  before: data.products.edges[0].cursor
                }
              });
            }}
            hasNext={data.products.pageInfo.hasNextPage}
            onNext={() => {
              loadProducts({
                variables: {
                  first: 5,
                  after: data.products.edges[data.products.edges.length - 1].cursor
                }
              });
            }}
          />
        </div>
      )}

    </Page>
  );
};


export default Index;
