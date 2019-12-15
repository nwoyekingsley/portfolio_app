import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import CartHeader from "./Cart";
import ProductDetail from "../Cart/ProductDetail";
import Product from "../Home/Products";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";
import { connect } from "react-redux";
import  {getCartProducts} from '../Redux/Actions'

class Cart extends Component {
  componentWillMount(){
    this.props.getCartProducts()
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        <Script />
        <Navheader value={value} />
        <CartHeader />
        <ProductDetail />
        <Product />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { value } = state.Shop;
  return {
    value
  };
};

export default connect(mapStateToProps, {getCartProducts})(Cart);
