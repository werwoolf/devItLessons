import React, { useCallback, useEffect, useMemo, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Page,
  Loading,
  Frame,
  ContextualSaveBar,
} from "@shopify/polaris";
import { useMutation } from "react-apollo";
import {
  GET_PRODUCT,
  REDACT_PRODUCT,
} from "../graphFiles/graphqlRequestProducts.js";
import isEqual from "lodash/isEqual.js";
import { useMemoizedQuery } from "../hooks/useMemoizedQuery.js";

const EditProduct = ({ match, history }) => {
  const [newProductValue, setNewProductValue] = useState({});
  const [initialProductData, setInitialProductData] = useState({});

  const [stateSaveBar, setStateSaveBar] = useState(false);
  const [loadProduct, { data, loading }] = useMemoizedQuery(GET_PRODUCT, {
    variables: { id: `gid://shopify/Product/${match.params.id}` },
  });
  const [updateProduct] = useMutation(REDACT_PRODUCT, {
    variables: {
      title: newProductValue.title,
      price: newProductValue.price,
      id: `gid://shopify/Product/${match.params.id}`,
    },
  });

  useEffect(() => {
    loadProduct();
    if (data !== undefined) {
      const initialData = {
        title: data.product.title,
        price: data.product.priceRangeV2.minVariantPrice.amount,
      };
      setInitialProductData(initialData);
      setNewProductValue(initialData);
    }
  }, [data]);

  const handleChangeTitle = useCallback(
    (newValue) => {
      setNewProductValue((prev) => ({
        ...prev,
        title: newValue,
      }));
      setStateSaveBar(
        !isEqual(initialProductData, { ...newProductValue, title: newValue })
      );
    },
    [newProductValue]
  );
  const handleChangePrice = useCallback(
    (newValue) => {
      setNewProductValue((prev) => ({
        ...prev,
        price: newValue,
      }));
      setStateSaveBar(
        !isEqual(initialProductData, { ...newProductValue, price: newValue })
      );
    },
    [newProductValue]
  );
  const handleUpdateProduct = useCallback(async () => {
    await updateProduct();
    history.push("/products");
  }, [updateProduct]);

  const ContextSaveBar = useMemo(
    () => (
      <div style={{ height: "250px" }}>
        <Frame>
          <ContextualSaveBar
            message="Unsaved product"
            saveAction={{
              onAction: handleUpdateProduct,
              loading: false,
              disabled: false,
            }}
            discardAction={{
              onAction: () => {
                setNewProductValue(initialProductData);
                setStateSaveBar(false);
              },
            }}
          />
        </Frame>
      </div>
    ),
    [initialProductData, setNewProductValue, handleUpdateProduct]
  );

  return (
    <Frame>
      {loading && <Loading />}
      {stateSaveBar && ContextSaveBar}
      {data && (
        <Page primaryAction={{
          onAction: () => history.push(`/products`),
          content: "Back to products",
        }}>
          <TextField
            label="Product title"
            value={newProductValue.title}
            onChange={handleChangeTitle}
            autoComplete="off"
          />
          <TextField
            label="Product price"
            value={newProductValue.price}
            type={"number"}
            onChange={handleChangePrice}
            autoComplete="off"
          />
        </Page>
      )}
    </Frame>
  );
};

export default withRouter(EditProduct);
