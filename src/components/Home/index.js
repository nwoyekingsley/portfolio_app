import React, { Component } from "react";
import { connect } from "react-redux";
import { getallProducts } from "../Redux/Actions";
import Script from "../Script/Script";
import Navbar from "../Reusables/Navbar";
import Statis from "./Statis";
import Trending from "./Trending";
import Fashion from "./Fashion";
import Products from "./Products";
import HighLight from "./HighLight";
import Testimony from "./Testimony";
import Feeds from "./Feeds";
import Services from "./Services";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.props.getallProducts(1, 20);
  }
  render() {
    return (
      <div>
        <Script />
        
         
          <Navbar />
          <Statis />
          {/* <Trending /> */}
          <Products />
          <Fashion />
          <HighLight />
          {/* <Testimony /> */}
          <Feeds />
          <Services />
          <Subscribe />
          <Footer />
          
        
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state.Shop;

  return {
    products
  };
};

export default connect(mapStateToProps, { getallProducts })(Home);
