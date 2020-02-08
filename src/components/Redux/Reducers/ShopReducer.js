import {
  INTCREMENT_ITEM,
  DECREASE_ITEM,
  ADD_TO_CART,
  TAKES_TO_CART,
  RETURNS_TO_CART,
  ONCHANGE_HANDLER,
  PAYMENT_STACK,
  PAYMENT_BANK,
  PAYMENT_CHECK,
  CHANGEPAYMENT_TYPES,
  GET_PRODUCTS,
  GET_ONE_PRODUCT,
  GET_ATTRIBUTES,
  GET_PRODUCTS_ROW,
  SHIPPING_INFO, 
  UPDATE_SHIPPING_INFO,
  LOGIN_SUCCESS
} from "../Actions/Types";

const initialState = {
  value: 1,
  addedCart: [],
  total: "",
  moveToCart: false,
  paymentType: "",
  products: [],
  oneProduct: {},
  allAttributes: [],
  productCount : 0,
  shippingInfo:null,
  loggedIn: false
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case INTCREMENT_ITEM:
      return { ...state, value: action.payload };

    case DECREASE_ITEM:
      return { ...state, value: action.payload };

    case ONCHANGE_HANDLER:
      return { ...state, value: action.payload };

    case ADD_TO_CART:
      return { ...state, addedCart: action.payload};

    case RETURNS_TO_CART:
      return { ...state, moveToCart: action.payload };

    case TAKES_TO_CART:
      return { ...state, moveToCart: action.payload };

    case PAYMENT_STACK:
      return { ...state, paymentType: action.payload };

    case PAYMENT_BANK:
      return { ...state, paymentType: action.payload };

    case PAYMENT_CHECK:
      return { ...state, paymentType: action.payload };

    case GET_PRODUCTS_ROW:
      return { ...state, productCount: action.payload};

    case CHANGEPAYMENT_TYPES:
      return { ...state, paymentType: action.payload };

    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    case GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };

    case SHIPPING_INFO:
      let newshiping = action.payload.map((item, i) => {
                
        item['isChecked'] = false;
        return item;
      })
      return { ...state,shippingInfo:newshiping };

    case UPDATE_SHIPPING_INFO:
      let updateshiping = state.shippingInfo.map((item, i) => {
        if (item.ShippingId == action.payload){
          item.isChecked = true;
        }
        else{
          item.isChecked = false;
        }
        return item;
      })
        return { ...state,shippingInfo:updateshiping };

    case GET_ATTRIBUTES:
      return{...state, allAttributes: action.payload}

    case LOGIN_SUCCESS:
        return{...state, loggedIn: action.payload}
    default:
      return state;
  }
};

export default ShopReducer;
