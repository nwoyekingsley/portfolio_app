import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import CheckoutHeader from "./Checkout";
import BillingDetails from "./BillingDetails";
import Products from "../Home/Products";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";

class About extends Component {
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

export default About;
