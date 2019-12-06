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
  GET_PRODUCTS
} from "../Actions/Types";

const initialState = {
  shopData: [
    {
      id: "1",
      status: "30%",
      title: "Young woman wearing dress",
      realPrice: "120.00",
      discountPrice: "80.00",
      picture: "/Assets/images/product-1.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "2",
      status: "NewArrival",
      title: "Young woman wearing dress",
      realPrice: "120.00",
      discountPrice: "",
      picture: "/Assets/images/product-2.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "3",
      status: "",
      title: "Young Woman Wearing Dress",
      realPrice: "120.00",
      discountPrice: "",
      picture: "/Assets/images/product-3.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "4",
      status: "",
      title: "Young Woman Wearing Dress",
      realPrice: "120.00",
      discountPrice: "",
      picture: "/Assets/images/product-4.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "5",
      status: "",
      title: "Young Woman Wearing Dress",
      realPrice: "120.00",
      discountPrice: "",
      picture: "/Assets/images/product-5.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "6",
      status: "",
      title: "Young Woman Wearing Dress",
      realPrice: "120",
      discountPrice: "",
      picture: "/Assets/images/product-6.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "7",
      status: "",
      title: "Young Woman Wearing Dress",
      realPrice: "120.00",
      discountPrice: "",
      picture: "/Assets/images/product-7.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {
      id: "8",
      status: "Best Sellers",
      title: "Young Woman Wearing Dress",
      realPrice: "120.00",
      discountPrice: "",
      picture: "/Assets/images/product-8.jpg",
      size: ["Small", "Medium", "Large", "Extra Large"],
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    }
  ],
  value: 1,
  addedCart: [],
  total: "",
  moveToCart: false,
  paymentType: "",
  products: []
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
      return { ...state, addedCart: [...state.addedCart, action.payload] };

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

    case CHANGEPAYMENT_TYPES:
      return { ...state, paymentType: action.payload };

    case GET_PRODUCTS:

      return{...state, products: action.payload}

    default:
      return state;
  }
};

export default ShopReducer;
