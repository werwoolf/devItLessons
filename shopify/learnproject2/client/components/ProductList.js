import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useMutation} from "react-apollo";
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
  Frame,
} from "@shopify/polaris";
import {
  GET_PRODUCT_LIST,
  DELETE_PRODUCT,
  createQueryVariables,
} from "../graphFiles/graphqlRequestProducts.js";
import {useMemoizedQuery} from "../hooks/useMemoizedQuery.js";
import {Link, withRouter} from "react-router-dom";
import pick from "lodash/pick";
import debounce from "lodash/debounce";
import qs from "query-string";

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
  const [sortValue, setSortValue] = useState("DATE_MODIFIED_DESC");
  const [taggedWith, setTaggedWith] = useState("");
  const [search, setSearch] = useState(qs.parse(location.search).search);

  const handleLoadProducts = useCallback(
    (params = {}) => {
      params = {
        search,
        ...params,
      };

      history.push({
        path: '/products',
        search: qs.stringify(pick(params, ["after", "before", "search"])),
      });

      loadProducts({variables: createQueryVariables(params)});
    },
    [loadProducts, search]
  );

  useEffect(() => {
    const {before = null, after = null, search = null} = qs.parse(location.search);
    console.log(before)
    loadProducts({
      variables: createQueryVariables({before, after, search}),
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
    });

    setSelectedItems([]);
  }, [data, handleLoadProducts]);

  const handleNextPage = useCallback(() => {
    handleLoadProducts({
      after: data.products.edges[data.products.edges.length - 1].cursor,
    });

    setSelectedItems([]);
  }, [data, search, handleLoadProducts]);

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
      content: "Edit customers",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ];

  const bulkActions = [
    {
      content: "Add tagssss",
      onAction: () => console.log("Todo: implement bulk add tags"),
    },
    {
      content: "Remove tags",
      onAction: () => console.log("Todo: implement bulk remove tags"),
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
              {label: "Newest update", value: "DATE_MODIFIED_DESC"},
              {label: "Oldest update", value: "DATE_MODIFIED_ASC"},
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
      )}
      <Link to="/products/create">create product</Link>
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
