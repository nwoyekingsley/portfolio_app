import { GET_PRODUCTS, GET_ONE_PRODUCT, ADD_TO_CART, GET_ATTRIBUTES } from "./Types";
import {apiUrl} from './../../Script/config'
import axios from "axios";

// INTCREMENT_ITEM BUTTON IN MY PRODUCT_SINGLE
export const getallProducts = (page,limit) => {
  return dispatch => {

    
    axios
      .get(apiUrl +"products", {params: {
        limit: limit,
        page : page
      }})
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
  console.log(product_id, 'product_id')
  console.log(apiUrl+`products/${product_id}/details`)
  return dispatch => {
    axios
      .get(
        apiUrl+`products/${product_id}/details`
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
      .get(apiUrl+
        `attributes/inProduct/${product_id}`
      )
      .then(res => {
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
 console.log({cart_id})
  return dispatch => {
    axios
      .get(apiUrl +
        `shoppingcart/${cart_id}`
      )
      .then(res => {
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
      .delete(apiUrl+
        `shoppingcart/removeProduct/${data}`
      )
      .then(res => {
       
        dispatch(getCartProducts());
      })
      .catch(err => {
        console.log(err, "i am err");
      });
  };
};
