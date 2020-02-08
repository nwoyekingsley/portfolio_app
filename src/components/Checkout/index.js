import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import CheckoutHeader from "./Checkout";
import BillingDetails from "./BillingDetails";
import Products from "../Home/Products";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";
import { connect } from "react-redux";
import  {getCartProducts, GetShipingInfo} from '../Redux/Actions'


class About extends Component {
  componentWillMount(){
    this.props.getCartProducts()
    this.props.GetShipingInfo()
  }
  render() {
    return (
      <div>
        <Script />
        <Navheader />
        <CheckoutHeader />
        <BillingDetails />
        <Products />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
 
  return {
  };
};

export default connect(mapStateToProps, {getCartProducts, GetShipingInfo})(About);
