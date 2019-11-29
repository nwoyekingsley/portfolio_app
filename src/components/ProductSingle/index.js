import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import ProductsSingle from "./ProductSingle";
import ProductView from "./ProductView";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";
import { connect } from "react-redux";
import { addedtocart } from "../Redux/Actions";

class ProductSingle extends Component {
  render() {
    const { oneProduct, value } = this.props;
    return (
      <div>
        <Script />
        <Navheader value={value} />
        <ProductsSingle />
        <ProductView
          product={oneProduct}
          addedtocart={() => this.props.addedtocart(oneProduct)}
        />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { shopData, value } = state.Shop;
  const oneProduct = shopData.find(product => {
    return product.id === id;
  });

  return {
    oneProduct,
    value
  };
};

export default connect(
  mapStateToProps,

  { addedtocart }
)(ProductSingle);
