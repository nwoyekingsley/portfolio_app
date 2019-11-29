import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import ShopHeader from "./Shop";
import ShopWorld from "./ShopWorld";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";

class Shop extends Component {
  render() {
    return (
      <div>
        <Script />
        <Navheader />
        <ShopHeader />
        <ShopWorld />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Shop;
