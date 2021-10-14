import React, {useCallback, useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {useLazyQuery, useMutation} from 'react-apollo';
import {
  Card,
  ResourceList,
  TextStyle,
  TextField,
  ResourceItem,
  Pagination,
  Thumbnail,
  Button,
  Filters,
  Loading,
  Frame
} from '@shopify/polaris';

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

const DELETE_PRODUCT = gql`
mutation Delete($id:ID!) {
  productDelete(input: {id: $id}) {
  userErrors {
      message
    }
  }
}`

function Index() {
  const [loadProducts, {loading, error, data, refetch}] = useLazyQuery(GET_PRODUCT_LIST,);
  const [mutateFunction, {loading: loadDelete, error: Delete, data: dataDelete}] = useMutation(DELETE_PRODUCT);

  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC');
  const [taggedWith, setTaggedWith] = useState('');
  const [queryValue, setQueryValue] = useState(null);

  useEffect(() => {
    loadProducts({
      variables: {
        first: 5
      }
    });
    console.log('update')
    setSelectedItems([])
  }, [loadProducts, dataDelete])


  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    [],
  );
  const handleQueryValueChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);
  const handlePreviousPage = useCallback(() => {
    loadProducts({
      variables: {
        last: 5,
        before: data.products.edges[0].cursor
      }
    })
    setSelectedItems([])
  }, [data, loadProducts])
  const handleNextPage = useCallback(() => {
    loadProducts({
      variables: {
        first: 5,
        after: data.products.edges[data.products.edges.length - 1].cursor
      }
    });
    setSelectedItems([])
  }, [data, loadProducts])

  const handleDeleteProduct = useCallback(async () => {
    selectedItems.forEach(item => mutateFunction({variables: {id: item}}));
    data = await refetch({first:5})
  }, [selectedItems, mutateFunction])

  const resourceName = {
    singular: 'product',
    plural: 'products',
  };

  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];

  const bulkActions = [
    {
      content: 'Add tagssss',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Delete product',
      onAction: handleDeleteProduct,
    },
  ];

  const filters = [
    {
      key: 'taggedWith3',
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = !isEmpty(taggedWith)
    ? [
      {
        key: 'taggedWith3',
        label: disambiguateLabel('taggedWith3', taggedWith),
        onRemove: handleTaggedWithRemove,
      },
    ]
    : [];

  const filterControl = (
    <Filters
      queryValue={queryValue}
      filters={filters}
      appliedFilters={appliedFilters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    >
      <div style={{paddingLeft: '8px'}}>
        <Button onClick={() => console.log('New filter saved')}>Save</Button>
      </div>
    </Filters>
  );
  console.log(data)
  return (<div>
    {loading && <Frame>
      <Loading/>
    </Frame>}
    {data &&
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={data.products.edges}
        renderItem={renderItem}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        promotedBulkActions={promotedBulkActions}
        bulkActions={bulkActions}
        sortValue={sortValue}
        idForItem={(item) => item.node.id}

        sortOptions={[
          {label: 'Newest update', value: 'DATE_MODIFIED_DESC'},
          {label: 'Oldest update', value: 'DATE_MODIFIED_ASC'},
        ]}
        onSortChange={(selected) => {
          setSortValue(selected);
          console.log(`Sort option changed to ${selected}.`);
        }}
        filterControl={filterControl}
      />
      <Pagination
        hasPrevious={data.products.pageInfo.hasPreviousPage}
        onPrevious={handlePreviousPage}
        hasNext={data.products.pageInfo.hasNextPage}
        onNext={handleNextPage}
      />
    </Card>
    }
  </div>)
    ;

  function renderItem(item) {
    const {id, title, latestOrderUrl} = item.node;
    const {amount: maxPrice, currencyCode: currencyMaxPrice} = item.node.priceRangeV2.maxVariantPrice;
    const {amount: minPrice, currencyCode: currencyMinPrice} = item.node.priceRangeV2.minVariantPrice;
    const media = <Thumbnail source={''} customer size="medium" name={title} alt={''}/>;
    const shortcutActions = latestOrderUrl
      ? [{content: 'View latest order', url: latestOrderUrl}]
      : null;
    return (
      <ResourceItem
        id={id}
        media={media}
        maxPrice={maxPrice}
        currencyMaxPrice={currencyMaxPrice}
        minPrice={minPrice}
        currencyMinPrice={currencyMinPrice}
        accessibilityLabel={`View details for ${title}`}
        shortcutActions={shortcutActions}
        loading={loading}
        persistActions
      >
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
          <TextStyle variation="normal"> {minPrice}{currencyMinPrice}</TextStyle>
        </h3>
      </ResourceItem>
    );
  }

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'taggedWith3':
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
}

export default Index;
