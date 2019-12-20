import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getallProducts} from '../Redux/Actions'

class ShopWorld extends Component {

  componentWillMount() {
    this.props.getallProducts();
  }  

  render() {
    const { products } = this.props;
    console.log(products)
    return (
      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row">
            {products.length > 0
              ? products.map(product => {
                  return (
                    <div
                      key={product.ProductId}
                      className="col-sm col-md-6 col-lg-3 ftco-animate"
                    >
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
                          {product.Status !== "" ? (
                            <span className="status">{product.Status}</span>
                          ) : (
                            ""
                          )}
                        </Link>
                        <div className="text py-3 px-3">
                          <h3>
                            <Link to={`/productsingle/${product.ProductId}`}>
                              {product.Name}
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
                })
              : ""}
          </div>
          {/* <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link to="#">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
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

export default connect(mapStateToProps, {getallProducts})(ShopWorld);
