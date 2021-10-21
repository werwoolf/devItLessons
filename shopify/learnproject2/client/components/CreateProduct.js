import React, {useCallback, useEffect, useState} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import {TextField, Button} from "@shopify/polaris";
import {useMutation} from "react-apollo";
import {CREATE_PRODUCT} from "../graphFiles/graphqlRequestProducts.js";

function CreateProduct({history}) {
  const [titleValue, setTitleValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [createProduct, {loading, data}] = useMutation(CREATE_PRODUCT);

  const handleChangeTitle = useCallback((newValue) => setTitleValue(newValue), []);
  const handleChangePrice = useCallback((newValue) => setPriceValue(newValue), []);
  const handleProductCreate = useCallback(async () => {
    await createProduct({
      variables: {title: titleValue, price: priceValue}
    })
  }, [titleValue, priceValue, createProduct])

  return (
    <div style={{padding: 15}}>
      <TextField
        label="Product title"
        value={titleValue}
        onChange={handleChangeTitle}
        autoComplete="off"
      />

      <TextField
        label="Product price"
        value={priceValue}
        type="number"
        onChange={handleChangePrice}
        autoComplete="off"
      />

      <Button onClick={handleProductCreate}>Create product</Button>
      {data && !loading && <Redirect to="/products"/>}
    </div>
  );
}

export default withRouter(CreateProduct);
