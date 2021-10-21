import gql from "graphql-tag";

export const createQueryVariables = ({limit = 5, before = null, after = null, search = null} = {}) => {
  const variables = {};

  if (search) {
    variables.query = search;
  }

  if (before) {
    variables.before = before;
    variables.last = limit;
    return variables
  } else if (after) {
    variables.after = after;
    variables.first = limit;
    return variables
  }

  variables.first = limit;

  return variables;
}

export const GET_PRODUCT_LIST = gql`
query getProducts($first: Int, $last: Int, $after: String, $before: String, $query: String) {
  products(first: $first, last: $last, after: $after, before: $before, query: $query) {
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
             currencyCode
             amount
          }
           minVariantPrice {
            amount
            currencyCode
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

export const DELETE_PRODUCT = gql`
mutation Delete($id:ID!) {
  productDelete(input: {id: $id}) {
  userErrors {
      message
    }
  }
}`
export const CREATE_PRODUCT = gql`
mutation Create ($title: String!, $price: Money!){
   productCreate(input: {title: $title, variants: {price: $price }}) {
    product {
      bodyHtml
    }
  }
}`
