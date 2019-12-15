import { GET_PRODUCTS, GET_ONE_PRODUCT, ADD_TO_CART, GET_ATTRIBUTES } from "./Types";

import axios from "axios";

// INTCREMENT_ITEM BUTTON IN MY PRODUCT_SINGLE
export const getallProducts = () => {
  return dispatch => {
    axios
      .get("http://ogbuifymark-001-site2.btempurl.com/products")
      .then(res => {
        console.log(res, 'i am res')
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

//Get one product attributes
export const getProductAttributes = product_id => {
  return dispatch => {
    axios
      .get(
        `http://ogbuifymark-001-site2.btempurl.com/attributes/inProduct/${product_id}`
      )
      .then(res => {
        console.log(res.data, 'i am attributes')
        dispatch({
          type: GET_ATTRIBUTES,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err, "i am err");
      });
  };
};


//Get Products from Cart
export const getCartProducts = () => {
  let cart_id = JSON.parse(localStorage.getItem('cartId'))
  console.log(cart_id, 'get cartid products')
  return dispatch => {
    axios
      .get(
        `http://ogbuifymark-001-site2.btempurl.com/shoppingcart/${cart_id}`
      )
      .then(res => {
        console.log(res.data, 'i am cart things')
        dispatch({
          type: ADD_TO_CART,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err, "i am err");
      });
  };
};

//Delete Product from Cart
export const deleteCartProducts = (data) => {

  return dispatch => {
    axios
      .delete(
        `http://ogbuifymark-001-site2.btempurl.com/shoppingcart/removeProduct/${data}`
      )
      .then(res => {
        console.log(res.data, 'i am deleted things things')
        dispatch(getCartProducts());
      })
      .catch(err => {
        console.log(err, "i am err");
      });
  };
};
