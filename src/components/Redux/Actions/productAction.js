import { GET_PRODUCTS, GET_ONE_PRODUCT } from "./Types";

import axios from "axios";

// INTCREMENT_ITEM BUTTON IN MY PRODUCT_SINGLE
export const getallProducts = () => {
  return dispatch => {
    axios
      .get("http://ogbuifymark-001-site2.btempurl.com/products")
      .then(res => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data.Rows
        });
      })
      .catch(err => {
        console.log(err, "i am err");
      });
  };
};

//Get one Product
export const getOneProduct = product_id => {
  return dispatch => {
    axios
      .get(
        `http://ogbuifymark-001-site2.btempurl.com/products/${product_id}/details`
      )
      .then(res => {
        dispatch({
          type: GET_ONE_PRODUCT,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err, "i am err");
      });
  };
};
