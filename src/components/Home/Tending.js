import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getallProducts } from "../Redux/Actions";

class Tending extends Component {
  UNSAFE_componentWillMount() {
    this.props.getallProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <section className="ftco-section ftco-product">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Trending</h1>
              <h2 className="mb-4">Trending</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="product-slider owl-carousel ftco-animate">
                {products.length > 0
                  ? products.map(product => {
                      return (
                        <div key={product.ProductId} className="item">
                          <div className="product">
                            <Link
                              to={`/productsingle/${product.ProductId}`}
                              className="img-prod"
                            >
                              <img
                                className="img-fluid"
                                src={product.Image}
                                alt="Colorlib Template"
                              />
                              {product.status !== "" ? (
                                <span className="status">{product.Status}</span>
                              ) : (
                                ""
                              )}
                            </Link>
                            <div className="text pt-3 px-3">
                              <h3>
                                <Link
                                  to={`/productsingle/${product.ProductId}`}
                                >
                                  {product.name}
                                </Link>
                              </h3>
                              <div className="d-flex">
                                <div className="pricing">
                                  <p className="price">
                                    <span className="mr-2 price-dc">
                                      {product.DiscountedPrice}
                                    </span>
                                    <span className="price-sale">
                                      {product.Price}
                                    </span>
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
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
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

export default connect(mapStateToProps, { getallProducts })(Tending);
