import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getallProducts } from "../Redux/Actions";

class Products extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    // this.props.getallProducts(1, 20);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products.length > 0){
      console.log(nextProps.products)

     
      return {
        products:nextProps.products ,
      };
    }
    else{
      return null
    }
    
   }

  getChosenProducts = () => {
    const chosenProducts = [];
    const { products } = this.state;
    if (products.length> 0){
      let random = Math.floor(Math.random()*(16+1)+1)
    
      for (let i = random; i < random + 4; i++) {
        chosenProducts.push(
          <div
            key={products[i].ProductId}
            className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated"
          >
            <div className="product">
              <Link
                to={`/productsingle/${products[i].ProductId}`}
                className="img-prod"
              >
                <img
                  className="img-fluid"
                  src={products[i].Image}
                  alt="Colorlib Template"
                />
              </Link>
              <div className="text py-3 px-3">
                <h3>
                  <Link to={`/productsingle/${products[i].ProductId}`}>
                    {products[i].Name}
                  </Link>
                </h3>
                <div className="d-flex">
                  <div className="pricing">
                    <p className="price">
                      <span>{products[i].Prices}</span>
                    </p>
                  </div>
                  <div className="rating">
                    <p className="text-right">
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                      <span className="ion-ios-star-outline" />
                    </p>
                  </div>
                </div>
                <hr />
                <p className="bottom-area d-flex">
                  <Link to="#" className="add-to-cart">
                    <span>
                      Add to cart <i className="ion-ios-add ml-1" />
                    </span>
                  </Link>
                  <Link to="#" className="ml-auto">
                    <span>
                      <i className="ion-ios-heart-empty" />
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      }
  }
    return chosenProducts;
  };

  render() {
    const { products } = this.state;

    return (
      <section className=" bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Products</h1>
              <h2 className="mb-4">Our Products</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {products.length > 0 ? this.getChosenProducts() : null}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { products } = state.Shop;

  return {
    products
  };
};

export default connect(mapStateToProps, { getallProducts })(Products);
