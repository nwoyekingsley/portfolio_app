import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import ProductsSingle from "./ProductSingle";
import ProductView from "./ProductView";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";
import { connect } from "react-redux";
import { addedtocart, getOneProduct, getCartId} from "../Redux/Actions";

class ProductSingle extends Component {

  componentWillMount(){
    this.props.getOneProduct(this.props.id)
    this.props.getCartId()
  }


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
  const { value , oneProduct} = state.Shop;

  return {
    oneProduct,
    value,
    id
  };
};

export default connect(
  mapStateToProps,

  { addedtocart, getOneProduct,getCartId}
)(ProductSingle);
