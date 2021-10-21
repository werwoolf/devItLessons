import React, {useCallback, useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import {TextField, Button,Page} from "@shopify/polaris";
import {useQuery} from "react-apollo";
import {GET_PRODUCT} from "../graphFiles/graphqlRequestProducts.js";

const EditProduct = ({match}) => {
  const [titleValue, setTitleValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const {data, loading} = useQuery(GET_PRODUCT, {variables: {id:`gid://shopify/Product/${match.params.id}`}});

  const handleChangeTitle = useCallback(newValue => setTitleValue(newValue), [setTitleValue])
  const handleChangePrice = useCallback(newValue => setPriceValue(newValue), [setPriceValue])




  useEffect(()=>{
    if(data){
      console.log(data)
      setTitleValue(data.product.title)
      setPriceValue(data.product.priceRangeV2.minVariantPrice.amount)
    }
  },[data])


  return (
    <Page>
      <TextField
        label="Product title"
        value={titleValue}
        onChange={handleChangeTitle}
        autoComplete="off"
      />
      <TextField
        label="Product price"
        value={priceValue}
        type={"number"}
        onChange={handleChangePrice}
        autoComplete="off"
      />
      <Button> Save changed product</Button>
    </Page>
  );
};

export default withRouter(EditProduct);
