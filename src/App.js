import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import ProductSingle from "./components/ProductSingle";
import Checkout from "./components/Checkout";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./components/Redux/Reducers";


const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          {/* <Loader /> */}
         
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/productsingle/:id" component={ProductSingle} />
          <Route exact path="/checkout" component={Checkout} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
