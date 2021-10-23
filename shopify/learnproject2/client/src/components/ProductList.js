import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useMutation} from "react-apollo";
import {
  Page,
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
  Frame,
} from "@shopify/polaris";
import {
  GET_PRODUCT_LIST,
  DELETE_PRODUCT,
  createQueryVariables,
} from "../graphFiles/graphqlRequestProducts.js";
import {useMemoizedQuery} from "../hooks/useMemoizedQuery.js";
import {withRouter} from "react-router-dom";
import pick from "lodash/pick";
import debounce from "lodash/debounce";
import qs from "query-string";
import last from "lodash/last.js";

function ProductList({location, history}) {
  const [
    loadProducts,
    {loading: isLoadingProducts, data},
  ] = useMemoizedQuery(GET_PRODUCT_LIST, {fetchPolicy: "no-cache"});
  const [deleteProducts, {loading: isDeletingProducts}] = useMutation(
    DELETE_PRODUCT
  );
  const loading = useMemo(() => isLoadingProducts || isDeletingProducts, [
    isLoadingProducts,
    isDeletingProducts,
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState(qs.parse(location.search).sortValue || "TITLE");
  const [taggedWith, setTaggedWith] = useState("");
  const [search, setSearch] = useState(qs.parse(location.search).search);

  const handleLoadProducts = useCallback(
    (params = {}) => {
      params = {
        search,
        ...params,
      };

      history.push({
        path: "/products",
        search: qs.stringify(
          pick(params, ["after", "before", "search", "sortValue"])
        ),
      });
      loadProducts({variables: createQueryVariables(params)});
    },
    [loadProducts, search]
  );

  useEffect(() => {
    const {
      before = null,
      after = null,
      search = null,
      sortValue = 'TITLE',
    } = qs.parse(location.search);

    loadProducts({
      variables: createQueryVariables({before, after, search, sortValue}),
    });
  }, []);

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    []
  );

  const debouncedLoadProducts = useCallback(
    debounce((params) => handleLoadProducts(params), 1500),
    [handleLoadProducts]
  );

  const handleQueryValueChange = useCallback(
    (value) => {
      setSearch(value);
      debouncedLoadProducts({search: value});
    },
    [debouncedLoadProducts]
  );

  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);

  const handleQueryValueRemove = useCallback(() => {
    setSearch("");
    handleLoadProducts();
    setSelectedItems([]);
  }, [setSearch]);

  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);

  const handlePreviousPage = useCallback(() => {
    handleLoadProducts({
      before: data.products.edges[0].cursor,
      sortValue,
    });

    setSelectedItems([]);
  }, [data, handleLoadProducts, sortValue]);

  const handleNextPage = useCallback(() => {
    handleLoadProducts({
      after: data.products.edges[data.products.edges.length - 1].cursor,
      sortValue,
    });

    setSelectedItems([]);
  }, [data, handleLoadProducts, sortValue]);

  const handleDeleteProduct = useCallback(async () => {
    setSelectedItems([]);

    await Promise.all(
      selectedItems.map((item) =>
        deleteProducts({
          variables: {id: item},
        })
      )
    );

    handleLoadProducts();
  }, [selectedItems, deleteProducts]);

  const resourceName = {
    singular: "product",
    plural: "products",
  };

  const promotedBulkActions = [
    {
      content: "Edit product",
      onAction: () => {
        history.push(`products/edit/${last(selectedItems[0].split("/"))}`);
      },
    },
  ];

  const bulkActions = [
    {
      content: "Add new product",
      onAction: () => console.log("add  product"),
    },
    {
      content: "Delete product",
      onAction: handleDeleteProduct,
    },
  ];

  const filters = [
    {
      key: "taggedWith3",
      label: "Tagged with",
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
        key: "taggedWith3",
        label: disambiguateLabel("taggedWith3", taggedWith),
        onRemove: handleTaggedWithRemove,
      },
    ]
    : [];

  const filterControl = (
    <Filters
      queryValue={search}
      filters={filters}
      appliedFilters={appliedFilters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    >
      <div style={{paddingLeft: "8px"}}>
        <Button onClick={() => console.log("New filter saved")}>Save</Button>
      </div>
    </Filters>
  );

  return (
    <Frame>
      {loading && <Loading/>}

      {data && (
        <Page
          primaryAction={{
            onAction: () => history.push(`/products/create`),
            content: "Add new product",
          }}
        >
          <Card>
            <ResourceList
              loading={loading}
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
                {label: "Product title A–Z", value: "TITLE"},
                {label: "Product title Z–A", value: "TITLE.reverse"},
                {label: "Created (oldest first)", value: "CREATED_AT"},
                {label: "Created (newest first)", value: "CREATED_AT.reverse"},
                {label: "Updated (oldest first)", value: "UPDATED_AT"},
                {label: "Updated (newest first)", value: "UPDATED_AT.reverse"},
                {label: "Low inventory", value: "INVENTORY_TOTAL"},
                {label: "High inventory", value: "INVENTORY_TOTAL.reverse"},
                {label: "Product type A–Z", value: "PRODUCT_TYPE"},
                {label: "Product type Z–A", value: "PRODUCT_TYPE.reverse"},
                {label: "Vendor A–Z", value: "VENDOR"},
                {label: "Vendor Z–A", value: "VENDOR.reverse"},
              ]}
              onSortChange={selected => {
                setSortValue(selected);
                handleLoadProducts({sortValue: selected});
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
        </Page>
      )}
    </Frame>
  );

  function renderItem(item) {
    const {id, title, latestOrderUrl} = item.node;
    const {
      amount: maxPrice,
      currencyCode: currencyMaxPrice,
    } = item.node.priceRangeV2.maxVariantPrice;
    const {
      amount: minPrice,
      currencyCode: currencyMinPrice,
    } = item.node.priceRangeV2.minVariantPrice;
    const media = (
      <Thumbnail source={""} customer size="medium" name={title} alt={""}/>
    );
    const shortcutActions = latestOrderUrl
      ? [{content: "View latest order", url: latestOrderUrl}]
      : null;
    return (
      <ResourceItem
        id={id}
        media={media}
        accessibilityLabel={`View details for ${title}`}
        shortcutActions={shortcutActions}
        persistActions
      >
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
          <TextStyle variation="normal">
            {" "}
            {minPrice}
            {currencyMinPrice}
          </TextStyle>
        </h3>
      </ResourceItem>
    );
  }

  function disambiguateLabel(key, value) {
    switch (key) {
      case "taggedWith3":
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === "" || value == null;
    }
  }
}

export default withRouter(ProductList);
