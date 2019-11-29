import { combineReducers } from "redux";
import Shop from "./ShopReducer";
import Testimony from "./TestimonyReducer";
import Form from "./FormReducer";

export default combineReducers({
  Shop,
  Testimony,
  Form
});
