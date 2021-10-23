import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  Loading,
  Frame,
  Page,
  Card,
} from "@shopify/polaris";
import { useMutation } from "react-apollo";
import { CREATE_PRODUCT } from "../graphFiles/graphqlRequestProducts.js";
import last from "lodash/last.js";

function CreateProduct({ history }) {
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [createProduct, { loading, data }] = useMutation(CREATE_PRODUCT);

  const [stateButtonConfirm, setStateButtonConfirm] = useState(true);

  const handleChangeTitle = useCallback(
    (newValue) => setTitleValue(newValue),
    []
  );
  const handleChangePrice = useCallback(
    (newValue) => setPriceValue(newValue),
    []
  );
  const handleProductCreate = useCallback(async () => {
    await createProduct({
      variables: { title: titleValue, price: priceValue },
    });
  }, [titleValue, priceValue, createProduct, data, history]);
  const dataValidate = useCallback(
    () => titleValue.length < 3 || priceValue.length < 1,
    [titleValue, priceValue]
  );

  useEffect(() => {
    if (data) {
      const id = last(data.productCreate.product.id.split("/"));
      history.push(`/products/edit/${id}`);
    }
  }, [data]);
  useEffect(() => setStateButtonConfirm(dataValidate), [
    titleValue,
    priceValue,
  ]);
  return (
    <Page
      style={{ padding: 15 }}
      breadcrumbs={[
        { onAction: () => history.push("/products"), content: "Products" },
      ]}
    >
      <Frame>
        {loading && <Loading />}
        <TextField
          label="Product title"
          value={titleValue}
          onChange={handleChangeTitle}
          autoComplete="off"
          minLength={3}
        />

        <TextField
          label="Product price"
          value={priceValue}
          type="number"
          onChange={handleChangePrice}
          autoComplete="off"
          minLength={1}
        />

        <Button disabled={stateButtonConfirm} onClick={handleProductCreate}>
          Create product
        </Button>
      </Frame>
    </Page>
  );
}

export default withRouter(CreateProduct);
