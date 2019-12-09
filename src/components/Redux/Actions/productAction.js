import { GET_PRODUCTS } from "./Types";

import axios from "axios";
// import { restElement } from "@babel/types";

// INTCREMENT_ITEM BUTTON IN MY PRODUCT_SINGLE
export const getallProducts = () => {
  return dispatch => {
    axios
      .get(`http://ogbuifymark-001-site2.btempurl.com/products`)
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
